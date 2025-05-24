const Product = require("../Schema/ProductsSchema")

exports.addProduct = async (req, res)=>{
    try {
         const productData = req.body;        

            if (req.file) {
  const folder = req.file.destination.split("public")[1]; // ex: /images/products
  productData.image = `${process.env.BASE_URL}${folder}/${req.file.filename}`;
}


        const newProduct = new Product(req.body);
        await newProduct.save();

        return res.status(200).json({success: true, data: newProduct})
    } catch (error) {
        return res.status(500).json({success:false, message: error?.message})
    }
}

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error('Error fetching product:', error);
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                message: 'Invalid product ID format'
            });
        }
        return res.status(500).json({
            success: false,
            message: error.message || 'Internal server error'
        });
    }
};

exports.allProducts = async (req, res)=>{
    try {
        const products = await Product.find();        

        return res.status(200).json({success: true, data: products})
    } catch (error) {
        return res.status(500).json({success:false, message: error?.message})
    }
}

exports.updateProduct = async (req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);     
        
        if(!product){
            return res.status(401).json({success: true, message: "product not exist"});
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true})

        return res.status(200).json({success: true, data: updatedProduct})
    } catch (error) {
        return res.status(500).json({success:false, message: error?.message})
    }
}

exports.deleteProduct  = async(req, res)=>{
    try {
        const {id} = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        return res.status(200).json({success: true, message: "deleted", data: deletedProduct})
    } catch (error) {
        return res.status(500).json({success:false, message: error?.message})
    }
}
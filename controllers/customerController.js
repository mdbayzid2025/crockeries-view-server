const Customer = require("../Schema/CustomerSchema");

// exports.addCustomer = async (req, res) => {
//   try {
//     const photo = req.file ? req.file.filename : null;
//     const newCustomer = new Customer({ ...req.body, photo });
//     await newCustomer.save();
    
//     console.log("nnnnew customer", newCustomer);
//     return res.status(201).json({ success: true, data: newCustomer });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: error.message });
//   }
// };

exports.addCustomer = async (req, res) => {
  try {
    const customerData = req.body;

    if (req.file) {
  const folder = req.file.destination.split("public")[1]; // ex: /images/products
  customerData.photo = `${process.env.BASE_URL}${folder}/${req.file.filename}`;
}

    const newCustomer = new Customer(customerData);
    await newCustomer.save();

    return res.status(200).json({ success: true, data: newCustomer });
  } catch (error) {
    return res.status(500).json({ success: false, message: error?.message });
  }
};




exports.allCustomer = async (req, res)=>{
    try {
        const customers = await Customer.find();        

        return res.status(200).json({success: true, data: customers})
    } catch (error) {
        return res.status(500).json({success:false, message: error?.message})
    }
}

exports.singleCustomer = async (req, res)=>{
    try {
        const {id} = req.params;
        const customers = await Customer.findById(id);        

        return res.status(200).json({success: true, data: customers})
    } catch (error) {
        return res.status(500).json({success:false, message: error?.message})
    }
}


const deleteFile = (fileUrl) => {
  const filePath = path.join(__dirname, "../public", fileUrl.replace(process.env.BASE_URL, ""));
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

exports.updateCustomer = async (req, res)=>{
    try {
        const {id} = req.params;
        const customer = await Customer.findById(id);     
        
        if(!customer){
            return res.status(401).json({success: true, message: "customer not exist"});
        }

         if (req.file) {
    if (customer.photo) deleteFile(customer.photo);

    const folder = req.file.destination.split("public")[1];
    req.body.photo = `${process.env.BASE_URL}${folder}/${req.file.filename}`;
  }

  
        const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {new: true})

        return res.status(200).json({success: true, data: updatedCustomer})
    } catch (error) {
        return res.status(500).json({success:false, message: error?.message})
    }
}




exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) return res.status(404).json({ message: "Customer not found" });

    // Delete image from disk
    if (customer.photo) {
      deleteFile(customer.photo); // ⬅️ Call the function
    }

    await Customer.findByIdAndDelete(req.params.id);

    return res.status(200).json({ success: true, message: "Customer deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


exports.deleteCustomer  = async(req, res)=>{
    try {
        const {id} = req.params;
        const deleteCustomer = await Customer.findByIdAndDelete(id);
        
        return res.status(200).json({success: true, message: "deleted", data: deleteCustomer})
    } catch (error) {
        return res.status(500).json({success:false, message: error?.message})
    }
}
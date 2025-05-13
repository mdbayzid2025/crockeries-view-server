const Customer = require("../Schema/CustomerSchema");


exports.addCustomer = async (req, res)=>{
    try {
        const newCustomer = new Customer(req.body);
        await newCustomer.save();

        return res.status(200).json({success: true, data: newCustomer})
    } catch (error) {
        return res.status(500).json({success:false, message: error?.message})
    }
}


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


exports.updateCustomer = async (req, res)=>{
    try {
        const {id} = req.params;
        const customer = await Customer.findById(id);     
        
        if(!customer){
            return res.status(401).json({success: true, message: "customer not exist"});
        }

        const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {new: true})

        return res.status(200).json({success: true, data: updatedCustomer})
    } catch (error) {
        return res.status(500).json({success:false, message: error?.message})
    }
}

exports.deleteCustomer  = async(req, res)=>{
    try {
        const {id} = req.params;
        const deleteCustomer = await Customer.findByIdAndDelete(id);
        return res.status(200).json({success: true, message: "deleted", data: deleteCustomer})
    } catch (error) {
        return res.status(500).json({success:false, message: error?.message})
    }
}
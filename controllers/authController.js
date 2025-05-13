const  jwt = require("jsonwebtoken");
const User = require("../Schema/UserSchema");
const bcrypt = require('bcrypt');


exports.register = async(req, res) =>{
    try {

        const  user = await User.findOne({email: req.body.email})
        if(user) return res.status(403).json({success: false, message: "Already have an account"})
        
        const saltRounds = 10; 

         // Hash the password before storing it
         const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = await User.create({...req.body, password: hashedPassword})
      
        return res
        .status(200).json({success:true, message: "Join success", user:newUser})
    } catch (error) {
        return res        
        .status(500).json({success:false, message: error?.message})
    }
}

exports.login = async (req, res) =>{
    try {
        
        const user =  await User.findOne({email: req.body.email})                
        
        if(!user) return res.status(403).json({success: false, message: "Don't have account, please join"})

        const isPasswordMatched = await bcrypt.compare(req.body.password, user?.password);

        if(!isPasswordMatched){
        return res.status(400).json({message: "User or password invalid"})
        }
            
       const accessToken =  jwt.sign(user.email, process.env.JWT_SECRET_KEY);                
        return res
        .status(200).json({sucess: true, message: "Log In success full", user: user, token:accessToken})
    } catch (error) {
        return res
        .status(500).json({sucess: false, message: error.message})  
    }
}

exports.googleLogin = async (req, res) =>{
    try {      
        const user =  await User.findOne({email: req.body.email})
        .populate({
            path: 'booking',           
            populate: {
                path: 'property',
                model: 'Properties'
            }
        });
        if(user){
        const accessToken =  jwt.sign(user.email, process.env.JWT_SECRET_KEY);  
        return res
        .status(200).json({sucess: true, message: "Log In  success full", user: user, token:accessToken})
        }else{
            const newUser = await User.create(req.body);
            const accessToken =  jwt.sign(user.email, process.env.JWT_SECRET_KEY);     
            return res
             .status(200).json({sucess: true, message: "Log In  success full", user: newUser, token:accessToken})           
        }                      
    } catch (error) {
        return res
        .status(500).json({sucess: false, message: error.message})  
    }
}

exports.getSingleUser = async(req, res)=>{
    try {
        const id = req.params.id;
        const user =  await User.findById(id)
        .populate({
            path: 'booking',
            populate: {
                path: 'property',
                model: 'Properties'
            }
        })
        .populate('my_properties');
        return res
        .status(200).json({sucess: true, message: "Log In  success full", data: user})   
    } catch (error) {
        return res
        .status(500).json({sucess: false, message: error.message})  
    }
 

}

exports.getAllUser = async(req, res)=>{
    try {
        const users = await User.find()     

    return res
    .status(200).json({sucess: true, message: "Log In  success full", data: users})   
}
     catch (error) {
        return res
        .status(500).json({sucess: false, message: error.message})  
    }
}
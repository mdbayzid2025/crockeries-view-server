const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({    
    email: {type: String, required: true, trim: true },
    password: {type: String, trim: true },        
},{ })


const User = mongoose.model("Users", userSchema);

module.exports = User
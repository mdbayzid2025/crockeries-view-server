const mongoose = require("mongoose")

const bookProperty = new mongoose.Schema({
    user: {type:mongoose.Types.ObjectId, ref: "User"},
    property: {type:mongoose.Types.ObjectId, ref: "Properties"},
    mobile: {type: String, trim: true},
    date: {type: Date},
})


const BookProperty = mongoose.model("BookProperty", bookProperty)

module.exports = BookProperty;
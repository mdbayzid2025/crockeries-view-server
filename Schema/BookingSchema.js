const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    property: {
        type: mongoose.Types.ObjectId,
        ref: "Properties"
    },
    phone: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
    }
})

const Booking = mongoose.model("Booking", bookingSchema)
module.exports = Booking;
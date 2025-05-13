const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  photo: { type: String,  },
  code: { type: String, required: true },
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  district: { type: String, default: 0 },
  trade_license: { type: String },  
}, { timestamps: true });

const Customer = mongoose.model("Customers", customerSchema);
module.exports = Customer;

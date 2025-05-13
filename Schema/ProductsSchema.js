const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  unit: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  image: { type: String },
  description: { type: String }
}, { timestamps: true });

const Product = mongoose.model("Products", productSchema);
module.exports = Product;

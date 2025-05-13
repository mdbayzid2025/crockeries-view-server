const { addProduct, allProducts, updateProduct, deleteProduct, getProductById } = require("../controllers/productController");

const productRouter = require("express").Router();

productRouter.get("/", allProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/create", addProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
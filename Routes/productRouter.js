
const { addProduct, allProducts, updateProduct, deleteProduct, getProductById } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadFile");

const productRouter = require("express").Router();

productRouter.get("/", authMiddleware, roleMiddleware('user'),  allProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/create", upload("products").single("photo"), addProduct);

productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
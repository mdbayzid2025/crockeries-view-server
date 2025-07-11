
const { addProduct, allProducts, updateProduct, deleteProduct, getProductById } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadFile");

const productRouter = require("express").Router();

productRouter.get("/", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  allProducts);
productRouter.get("/:id", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  getProductById);
productRouter.post("/create", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), upload("products").single("image"), addProduct);

// productRouter.put("/:id", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), upload("products").single("image"), updateProduct);
productRouter.put("/update", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), upload("products").single("image"), updateProduct);
productRouter.delete("/:id", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), deleteProduct);

module.exports = productRouter;
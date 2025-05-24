const { allCategory, createCategory, addBrand, updateCategory, removeBrand, deleteCategory } = require("../controllers/categoryController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const categoryRouter = require("express").Router();

categoryRouter.get("/", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  allCategory);
categoryRouter.post("/", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  createCategory);

categoryRouter.put("/:id/update", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  updateCategory);
categoryRouter.delete("/:id/delete-category", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  deleteCategory);

categoryRouter.post("/:id/new-brand", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  addBrand);
categoryRouter.delete("/:id/delete-brand", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  removeBrand);


module.exports = categoryRouter;
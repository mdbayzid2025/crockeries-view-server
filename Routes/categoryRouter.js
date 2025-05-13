const { allCategory, createCategory, addBrand, updateCategory, removeBrand, deleteCategory } = require("../controllers/categoryController");

const categoryRouter = require("express").Router();

categoryRouter.get("/", allCategory);
categoryRouter.post("/", createCategory);

categoryRouter.put("/:id/update", updateCategory);
categoryRouter.delete("/:id/delete-category", deleteCategory);

categoryRouter.post("/:id/new-brand", addBrand);
categoryRouter.delete("/:id/delete-brand", removeBrand);


module.exports = categoryRouter;
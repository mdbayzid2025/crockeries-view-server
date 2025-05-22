const { allCustomer, addCustomer, updateCustomer, deleteCustomer, singleCustomer } = require("../controllers/customerController");
const upload = require("../middleware/uploadFile");


const customerRouter = require("express").Router();

customerRouter.get("/", allCustomer);
customerRouter.get("/:id", singleCustomer);
customerRouter.post("/", upload("users").single("photo"), addCustomer);
customerRouter.put("/:id", updateCustomer);
customerRouter.delete("/:id", deleteCustomer);

module.exports = customerRouter;
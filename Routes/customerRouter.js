const { allCustomer, addCustomer, updateCustomer, deleteCustomer, singleCustomer } = require("../controllers/customerController");


const customerRouter = require("express").Router();

customerRouter.get("/", allCustomer);
customerRouter.get("/:id", singleCustomer);
customerRouter.post("/", addCustomer);
customerRouter.put("/:id", updateCustomer);
customerRouter.delete("/:id", deleteCustomer);

module.exports = customerRouter;
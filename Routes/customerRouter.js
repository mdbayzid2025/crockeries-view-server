const { allCustomer, addCustomer, updateCustomer, deleteCustomer } = require("../controllers/customerController");


const customerRouter = require("express").Router();

customerRouter.get("/", allCustomer);
customerRouter.post("/", addCustomer);
customerRouter.put("/:id", updateCustomer);
customerRouter.delete("/:id", deleteCustomer);

module.exports = customerRouter;
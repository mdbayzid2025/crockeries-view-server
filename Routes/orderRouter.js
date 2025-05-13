const { allOrders, createOrder, updateOrder, deleteOrder, getSingleOrder, updateStatus } = require("../controllers/orderController");

const orderRouters = require("express").Router();

orderRouters.get("/", allOrders);
orderRouters.get("/:id", getSingleOrder);
orderRouters.post("/create", createOrder);

orderRouters.put("/:id", updateOrder);
orderRouters.put("/:id/status", updateStatus);
orderRouters.delete("/:id", deleteOrder);

module.exports = orderRouters;
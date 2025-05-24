const { allOrders, createOrder, updateOrder, deleteOrder, getSingleOrder, updateStatus } = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const orderRouters = require("express").Router();

orderRouters.get("/", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), allOrders);
orderRouters.get("/:id", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  getSingleOrder);
orderRouters.post("/create", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), createOrder);

orderRouters.put("/:id", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  updateOrder);
orderRouters.put("/:id/status", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  updateStatus);
orderRouters.delete("/:id", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE),  deleteOrder);

module.exports = orderRouters;
const { allCustomer, addCustomer, updateCustomer, deleteCustomer, singleCustomer } = require("../controllers/customerController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadFile");


const customerRouter = require("express").Router();

customerRouter.get("/", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), allCustomer);
customerRouter.get("/:id", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), singleCustomer);
customerRouter.post("/", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), upload("users").single("photo"), addCustomer);

// customerRouter.put("/:id", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), upload("users").single("photo"), updateCustomer);
customerRouter.put("/update", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), upload("users").single("photo"), updateCustomer);
customerRouter.delete("/:id", authMiddleware, roleMiddleware(process.env.ACCESSABLE_ROLE), deleteCustomer);

module.exports = customerRouter;
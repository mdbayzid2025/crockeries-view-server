const { register, login, googleLogin, getAllUser, getSingleUser, refreshToken } = require("../controllers/authController")



const authRouter = require("express").Router()

authRouter.post("/register", register)
authRouter.post("/login", login)
// authRouter.post("/google/login", googleLogin)

authRouter.get("/users", getAllUser)

authRouter.get("/refresh-token", refreshToken);

module.exports = authRouter
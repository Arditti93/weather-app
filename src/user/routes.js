const { Router } = require("express")
const userRouter = Router()

const { register, login } = require("./controllers")

userRouter.post("/user/register", register)
//TODO: 
// Login route
userRouter.post("/user/login", login)

module.exports = userRouter
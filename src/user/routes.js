const { Router } = require("express")
const userRouter = Router()

const { register } = require("./controllers")

userRouter.post("/user/register", register)
//TODO: 
// Login route

module.exports = userRouter
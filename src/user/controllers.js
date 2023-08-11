const User = require("./model")

// {
//     "username" : "test",
//     "email" : "test@email.com",
//     "password" : "test",
//     "favouite" : "Manchester"
// }
const register = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        const successResponse = {
            message: "Success",
            newUser: newUser
        }
        res.status(201).json(successResponse)
    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

//TODO:
//login controller
// Check if username exsits in the database
// Check if passwords match
// return the weather of the users favourite place

module.exports = {
    register
}
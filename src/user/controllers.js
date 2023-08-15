const User = require("./model")
const { fetchWeather } = require("../utils/index")

const APIKEY = "d13e312e74a2fe3485762067e1129756";

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

// {
//     "username" : "test",
//     "password" : "test"
// }
const login = async (req, res) => {
    try {

        let user = await User.findOne({username: req.body.username})

        if (req.body.password !== user.password && user === null) {
            throw new Error("Username or password inccorect")
        }

        let favWeather = await fetchWeather(user.favouite, APIKEY)

        const successResponse = {
            message: "Success",
            weather: favWeather
        }

        res.status(201).json(successResponse)

        
    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error.message
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
    register,
    login
}
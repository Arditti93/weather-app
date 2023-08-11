const APIKEY = "d13e312e74a2fe3485762067e1129756";

const fetchWeather = async (city, APIKEY) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`)

    const data = await response.json() 
    console.log(data)
}

module.exports = {
    fetchWeather
}
// fetchWeather ("Liverpool", APIKEY)

const fetchWeather = async (city, APIKEY) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`)

    const data = await response.json() 
    return data
}

module.exports = {
    fetchWeather
}
// fetchWeather ("Liverpool", APIKEY)
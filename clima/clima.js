const axios = require('axios')
const apiKey = "bdcf5baae6d6f288342caed48c623f5a"

const getClima = async (lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    return resp.data.main.temp
}

module.exports = {
    getClima
}
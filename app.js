const argv = require('./config/yargs').argv
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const getInfo = async (direccion) => {
    try {
        const dataLugar = await lugar.getLugarLngLat(direccion)
        const dataClima = await clima.getClima(dataLugar.latitud, dataLugar.longitud)
        return `El clima de ${dataLugar.lugar} es de ${dataClima} C`
        
    } catch (error) {
        return `No se pudó determinar el clima de ${direccion}`
    }
}

getInfo(argv.direction)
    .then(msg => console.log(msg))
    .catch(e => console.log(e))
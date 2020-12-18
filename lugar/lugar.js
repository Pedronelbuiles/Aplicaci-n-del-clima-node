const apiKey = "pk.eyJ1IjoicGVkcm9uZWxibSIsImEiOiJja2l0bnUzazAwMHFxMnJxanQzNmZjMzhuIn0.qP0CRpFj0pWkCgKWzAfhaw"
const axios = require('axios')

const getLugarLngLat = async(dirreccion) =>{
    const encodeUlr= encodeURI(dirreccion)
 
    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUlr}.json`,
        params: {'access_token': apiKey}
    });
 
    const respuesta = await instance.get();
 
    if (respuesta.data.features.length === 0) {
        throw new Error(`No hay resultado para ${dirreccion}`)
    }
 
    const data = respuesta.data.features[0]
    const lugar = data.place_name
    const longitud = data.center[0]
    const latitud = data.center[1]
 
    return{
        lugar,
        longitud,
        latitud,
    }
}
 
module.exports = {
    getLugarLngLat
}
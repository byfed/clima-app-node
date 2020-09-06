const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

//const encodedUrl = encodeURI(argv.direccion);
//console.log(encodedUrl);
/*
const instance = axios.create({
    /* original en el curso se obtenían los datos de las coordenadas en un servicio y se usaban para llamar a otro
    Pero la api ya no funcionada, así que usé la misma api para obtener las coordenadas de la ciudad 
    Se usaba: https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Santander
    pero devuelve resultado null desde hace meses
    
baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=2ab3d74fdf2a26729b377262815b88a5`,
    //baseURL: 'https://ningunsitio.com',
    /* PAra la nueva api no es necesario incluir una key como cabecera.
    headers: {'X-RapidApi-Key' : 'La key correspondiente'}
    
});

instance.get()
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.log('Error', err);
    }) *
*/

//getLugarLatLng es una función asyn que regresa siempre una promesa.
//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);
//clima.getClima(4, 40)
//    .then(console.log)
//    .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
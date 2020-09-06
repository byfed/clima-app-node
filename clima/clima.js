const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2ab3d74fdf2a26729b377262815b88a5&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
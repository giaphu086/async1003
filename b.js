const request = require('request');

function getTempByCityName(cityName, cb) {
    const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
    request(URL + cityName, (error, response, body) => {
        if (error) return cb(error, null);
        const obj = JSON.parse(body);
        if (!obj.main) return cb(new Error('Cannot find city.'), null);
        cb(null, obj.main.temp);
    });
}

getTempByCityName('SaiGon', (error, result) => {
    if (error) return console.log(error.message);
    console.log(result);
});
// getTempByCityName('SaiGon');

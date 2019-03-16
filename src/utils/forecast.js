const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/7539acd029833c5d49a92dc048f396a8/'+
                lat + ',' + long + '?units=si';
    request({ url,json: true },(error, {body}) => {
        if (error) {
            callback('Unable to fetch data', undefined);
        } else if(body.error) {
            callback('Invalid input', undefined);
        } else {
            callback(undefined,`It is currently ${body.currently.temperature} degrees out.
            There is a ${body.currently.precipProbability} % chance of rain`);
        }
    });

}


module.exports = forecast;
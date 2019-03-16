const request = require('request');

const geocode = (address, callback) => {
    if(!address){
        callback(' Please enter input');
        return;
    }
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
                 address + '.json?access_token=pk.eyJ1Ijoic2FudG9zaDI0NCIsImEiOiJjanQ0Z29tNHQxam1jM3pteHQyeGU1N3lzIn0.rAO0x8zgGgopvXv3816BDQ';
   request({url, json: true },(error, response) => {
      if (error) {
          callback('Unable to fetch data', undefined);
      } else if (!response.body.features.length) {
        callback('Invalid input', undefined);
      } else {
          callback(undefined,{
              'latitude': response.body.features[0].center[1],
              'longitude': response.body.features[0].center[0],
              'location': response.body.features[0].place_name
            });
      }

   });

}


module.exports = geocode;
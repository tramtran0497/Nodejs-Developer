const request = require('postman-request');
require('dotenv').config()
const { default: chalk } = require('chalk');

const geocode = (place, callback) => {
    const mapBox_token = process.env.MAPBOX_TOKEN;
    // A string, number, boolean, null, undefined, or any object. Before encodeURIComponent() gets converted to string.
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?access_token=${mapBox_token}&limit=1`;

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback(chalk.red.bold("Your connection does not work, check it again!"), undefined);
        } else if(!response.body.features.length){
            callback(chalk.red.bold("It seems you forget to add your place."), undefined);
        } else{
            callback(undefined, {
                placeName: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longtitude: response.body.features[0].center[0],
            });
        };

    });
};

module.exports = geocode;



require('dotenv').config()
const { default: chalk } = require('chalk');
const request = require('postman-request');
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const place = process.argv[2];

if(!place){
    console.log(chalk.red.inverse("Please fill the city that you are looking for weather!"));
} else{
    geocode(place, (error, data) => {
        if(error){
            return console.log(error);
        }
        forecast(data.placeName, (error, forecastData) => {
            if(error) {
                return console.log(error);
            }
            console.log("Place: ", data.placeName);
            console.log("Weather: ", forecastData);
        });
    });
}


const request = require('postman-request');
require('dotenv').config()
const { default: chalk } = require('chalk');

const forecast = (place, callback) => {
    const access_key = process.env.ACCESS_KEY;
    // city Helsinki and units: Fahrenheit
    const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${place}&units=f`;

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback(chalk.red.bold("Sorry, please check your connection!"), undefined);
        }else if(response.body.error){
            callback(chalk.red.bold("It seems that you missed query!"), undefined)
        } else{
            const {temperature, feelslike} = response.body.current
            callback(undefined, chalk.green.bold(`The weather is currently ${temperature} degree celcious, however, it feels like ${feelslike} outside` ))
        }
    });
};

module.exports = forecast;

require('dotenv').config()
const { default: chalk } = require('chalk');
const request = require('postman-request');
const geocode = require("./utils/geocode");

const access_key = process.env.ACCESS_KEY;
const city = "Ho Chi Minh City, Vietnam"
// city Helsinki and units: Fahrenheit
const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${city}&units=f`

request({url: url, json: true }, (error, response, body) => {
    // handling errors. Either error or   will have a value, never both.
    if(error){
        console.log(chalk.red.bold("Sorry, please check your connection!"))
    } else if(response.body.error){
        console.log(chalk.red.bold("It seems that you missed query!"))
    } else{
        const {temperature, feelslike} = response.body.current
        console.log(chalk.green.bold(`The weather is currently ${temperature} degree celcious, however, it feels like ${feelslike} outside` ))
    }
});

geocode("Ho Chi Minh", (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
});
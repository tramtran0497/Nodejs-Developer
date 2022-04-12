// const { default: chalk } = require("chalk");
// const msg = chalk.red.bold("Tram")

require('dotenv').config()
const { default: chalk } = require('chalk');
const request = require('postman-request');

const access_key = process.env.ACCESS_KEY
// city Helsinki and units: Fahrenheit
const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=Helsinki&units=f`

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

const mapBox_token = process.env.MAPBOX_TOKEN
const limitNum = 1
const city = "Ho Chi Minh"
const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapBox_token}&limit=${limitNum}`

request({url: geocodeUrl, json: true }, (error, response, body) => {
    const {center} = response.body.features[0]
    const latitude = center[1]
    const longtitude = center[0]
    console.log(latitude, longtitude)
});
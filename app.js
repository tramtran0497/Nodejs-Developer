// const { default: chalk } = require("chalk");
// const msg = chalk.red.bold("Tram")

require('dotenv').config()
const request = require('postman-request');

const access_key = process.env.ACCESS_KEY

const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=Helsinki`

request({url, json: true }, (error, response, body) => {
    const {temperature, feelslike} = response.body.current
    console.log(`The weather is currently ${temperature} degree celcious, however, it feels like ${feelslike} outside` )
});
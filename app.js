// const { default: chalk } = require("chalk");
// const msg = chalk.red.bold("Tram")

require('dotenv').config()
const request = require('postman-request');

const access_key = process.env.ACCESS_KEY

const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=Helsinki`

request(url, (error, response, body) => {
    // parse data JSON string to JS Obj
    const data = JSON.parse(response.body)
    console.log(data.current)
});
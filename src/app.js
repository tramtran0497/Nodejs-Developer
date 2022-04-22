const express = require("express");
const path = require("path");
const hbs = require("hbs");
const forecast = require("../utils/forecast");
const geocode = require("../utils/geocode");

const app = express();
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// set up, pointing to file with extension "hbs"
app.set("view engine", "hbs");
// customizing views directory
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page",
        author: "Tram"
    });
});

app.get("/weather", (req, res) => {
    const {place} = req.query;
    if(!place){
        return res.render("weather", {
            title: "Weather Page",
            author: "Tram",
            error: "Please fill your place!",
        });
    };
    // set default value for destructuring argument
    geocode(place, (error, {placeName} = {}) => {
        if(error){
            return res.render("weather", {
                title: "Weather Page",
                author: "Tram",
                error: error,
            });
        }
        forecast(placeName, (error, forecastData) => {
            if(error){
                return res.render("weather", {
                    title: "Weather Page",
                    author: "Tram",
                    error: error,
                });
            };
            res.render("weather", {
                title: "Weather Page",
                author: "Tram",
                place: placeName,
                weather: forecastData
            });
        });
    });
});

app.get("*", (req,res) => {
    res.render("404", {
        errorMessage: "Page Not Found"
    });
});


app.listen('5000', () => {
    console.log("Server runs on port 5000");
});
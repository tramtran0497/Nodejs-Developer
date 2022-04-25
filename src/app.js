const express = require("express");
const path = require("path");
const hbs = require("hbs");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const port = process.env.PORT;

const app = express();
// create publicDirectory path
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// using static files in public folder
app.use(express.static(publicDirectoryPath));
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
    res.render("weather", {
        title: "Weather",
        author: "Tram"
    });
});

// create a place, dev use to fetch data and showing in Home page
app.get("/weatherAPI", (req, res) => {
    const {place} = req.query;
    if(!place){
        return res.send({
            error: "Please fill your place!",
        });
    };
    // set default value for destructuring argument
    geocode(place, (error, {placeName} = {}) => {
        if(error){
            return res.send({
                error: error,
            });
        }
        forecast(placeName, (error, forecastData) => {
            if(error){
                return res.send({
                    error: error,
                });
            };
            res.send({
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


app.listen(port, () => {
    console.log(`Server runs on port ${port}`);
});
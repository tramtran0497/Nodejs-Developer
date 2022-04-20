const express = require("express");
const path = require("path");
const hbs = require("hbs");

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
        title: "Home Page"
    });
})

app.listen('5000', () => {
    console.log("Server runs on port 5000");
});
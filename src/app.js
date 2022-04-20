const express = require("express");

const app = express();

// set up, pointing to file with extension "hbs"
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index")
})

app.listen('5000', () => {
    console.log("Server runs on port 5000");
});
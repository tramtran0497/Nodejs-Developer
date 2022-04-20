const express = require("express");

const app = express();

// app.com
app.get("/", (req, res) => {
    res.send("HELLO");
});

//app.com/about
app.get("/about", (req, res) => {
    res.send("About");
});

//app.com/help
app.get("/help", (req, res) => {
    res.send("Help");
});

app.listen('5000', () => {
    console.log("Server runs on port 5000");
});
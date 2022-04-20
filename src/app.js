const express = require("express");

const app = express();

// app.com
app.get("/", (req, res) => {
    res.send("HELLO");
});

//app.com/about


//app.com/help

app.listen('5000', () => {
    console.log("Server runs on port 5000");
});
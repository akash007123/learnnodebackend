const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, This is HomePage");
});

app.get("/about", (req, res) => {
    res.send("Hello, This is AboutusPage");
});

app.get("/contact", (req, res) => {
    res.send("Hello, This is ContactPage");
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});

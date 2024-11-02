const express = require("express");
const app = express();
const port = 8080;

app.listen(port, (req, res) => {
    console.log("Server is listening to the client requests");
});

app.get("/register", (req, res) => {
    let { user, pass } = req.query;
    res.send(`Standard get response.Welcome @ ${user}`);
});

app.post("/register", (req, res) => {
    let { user, pass } = req.query;
    res.send(`Welcome to the page @ ${user}`);
    console.log("this is the server side for the client side");
});

const express = require("express");
const app = express();


app.use((req, res, next) => {
    console.log("This is the first middleware");
    next();
});

app.use((req, res, next) => {
    console.log("This is second middleware");
    next();
})
app.get("/", (req, res) => {
    res.send("This is the root");
});

app.get("/random", (req, res) => {
    res.send("This is random");
});

app.listen(8080, () => {
    console.log("Server is working in the port no 8080");
});
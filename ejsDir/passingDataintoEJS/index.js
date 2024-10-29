const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.listen(port, () => {
    console.log("Server is listening to the client request");
});
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.get("/roll", (req, res) => {
    let data = Math.floor(Math.random() * 6) + 1;
    res.render("roll", { data });
});
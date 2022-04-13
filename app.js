const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath) );

 app.listen(process.env.PORT || 3001, () => console.log("servidor corriendo en el puerto 3000"))

 app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});
app.get("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/login.html");
    res.sendFile(htmlPath)
});
app.post("/login", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlPath)
});
app.get("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlPath)
});
app.post("/register", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/register.html");
    res.sendFile(htmlPath)
});

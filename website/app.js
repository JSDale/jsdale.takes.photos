const express = require('express')
const Path = require('path')
const app = express()
const Port = 3000

app.use(express.static(Path.join(__dirname, 'views')));
app.use(express.static(Path.join(__dirname, 'public')));
const mainController = require("./controllers/main");

app.set("view engine", "ejs")

app.get('/', mainController.main)

app.listen(Port, () =>
{
    console.debug("starting on: " + Port)
})

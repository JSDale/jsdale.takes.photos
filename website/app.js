require("dotenv").config();
const express = require('express');
const Path = require('path');
const app = express();
const isDev = false;
const 
{
    RELEASE_PORT,
    DEV_PORT,
    BASE_URI
} = process.env;

var port = RELEASE_PORT;
if (isDev)
{
    port = DEV_PORT;
}

app.use(express.static(Path.join(__dirname, 'views')));
app.use(express.static(Path.join(__dirname, 'public')));

const mainController = require("./controllers/main");
const gearController = require('./controllers/gear');

app.set("view engine", "ejs");

app.get('/', mainController.main);
app.get('/gear', gearController.main);

app.listen(port, () =>
{
    console.debug("starting on: " + port);
});

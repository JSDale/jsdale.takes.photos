require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` || 'development'});
const express = require('express');
const Path = require('path');
const app = express();
const 
{
    PORT,
    BASE_URI
} = process.env;

var port = PORT;

app.use(express.static(Path.join(__dirname, 'views')));
app.use(express.static(Path.join(__dirname, 'public')));

const mainController = require("./controllers/main");
const gearController = require('./controllers/gear');
const twentyThreeArchive = require('./controllers/archive23');

app.set("view engine", "ejs");

app.get('/', mainController.main);
app.get('/gear', gearController.main);
app.get('/2023', twentyThreeArchive.main);

app.listen(port, () =>
{
    console.debug("starting on: " + port);
});

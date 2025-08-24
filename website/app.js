require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` || '.env.pub'});
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const
{
    PORT
} = process.env;
const logPathPrefix = path.join(__dirname, "logs");
if (!fs.existsSync(logPathPrefix))
{
    fs.mkdirSync(logPathPrefix, {recursive: true});
}

const logFile = path.join(logPathPrefix, "visits.log");

var port = PORT;
if (typeof port == 'undefined')
{
    port = 3000;
}

app.use((req, _, next) => {
    const userAgent = req.get("User-Agent") || "Unknown";
    const logEntry = `${new Date().toUTCString()} - IP:${req.ip} - METH:${req.method} URL:${req.originalUrl} - UA:${userAgent}\n`;
    fs.appendFile(logFile, logEntry, (err) =>
    {
        if (err) console.error("Error logging visit: ", err);
    });

    next();
});

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

const mainController = require("./controllers/main");
const gearController = require('./controllers/gear');
const twentyThreeArchive = require('./controllers/archive23');
const filenamesController = require('./controllers/filenames');

app.set("view engine", "ejs");

app.get('/', mainController.main);
app.get('/gear', gearController.main);
app.get('/2023', twentyThreeArchive.main);
app.get('/filenames', filenamesController.main);

app.listen(port, () =>
{
    console.debug("starting on: " + port);
});

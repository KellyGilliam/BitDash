'use strict'
const express = require('express');
const app = express();
const path = require('path');
// const messageController = require('./messages/messageController');
// const authController = require('./utils/authController');
const scraperController = require('./scraper');
const bodyParser = require('body-parser');

// app.use(express.static(path.join(__dirname, './../client')));

// place routes here

app.get('/', (req,res) => {
    res.sendfile('./index.html');
})

app.get('/', (req,res) => {
    res.setHeader('content-type', 'text/html; charset=UTF-8');
    res.sendStatus(200);
})

app.get('/style.css', (req,res) => {
    res.sendfile('./style.css');
})

app.get('/style.css', (req,res) => {
    res.setHeader('content-type', 'text/html; charset=UTF-8');
    res.sendStatus(200);
})

app.get('/build/bundle.js', (req,res) => {
    res.sendfile('./build/bundle.js');
})

app.get('/build/bundle.js', (req,res) => {
    res.setHeader('content-type', 'text/html; charset=UTF-8');
    res.sendStatus(200);
})

app.get('/sample', scraperController.getData);



// app.get('/messages', messageController.giveMessages);

// app.get('/messages', (req,res) => {
//     res.sendfile(messageController);
//     res.setHeader('content-type', 'text/html; charset=UTF-8');
//     res.sendStatus(200);
// })

app.listen(3000);

module.exports = app;

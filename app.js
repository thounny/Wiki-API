//jshint esversion:6

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));




app.listen(3000, function() {
    console.log("Server started on port 3000");
});
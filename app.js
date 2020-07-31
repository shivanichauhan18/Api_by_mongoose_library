var express = require('express')

var app = express()
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var db = require("./model/db")
var blob = require('./model/blobs');

var blobs = require('./routes/blobs');
app.use('/blobs', blobs);




app.listen(3500, () => {
    console.log("server started on port 3500")
})

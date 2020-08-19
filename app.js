var express = require('express')
let mongoose = require('mongoose')

var app = express()
var bodyParser = require('body-parser')

var config = require("./config/connection")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(config.url, { useMongoClient: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// var conn = require("./config/db")
// console.log(conn)

// var db = require("./model/db")
// var blob = require('./model/blobs');

var blobs = require('./routes/blobs');
app.use('/blobs', blobs);




app.listen(3500, () => {
    console.log("server started on port 3500")
})

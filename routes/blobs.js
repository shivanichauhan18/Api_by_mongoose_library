var express = require('express'),
router = express.Router()
var db_conn = require("../model/blobs")
var mongoose = require('mongoose') //mongo connection
var bodyParser = require('body-parser') //parses information from POST
var methodOverride = require('method-override');

router.use(bodyParser.urlencoded({ extended: true }))

router.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

router.get('/',(req,res)=>{
    db_conn.find({}, function (err, blobs) {
        if (err) {
            return console.error(err);
        } else {
        res.send(blobs)
        }     
  });
});


router.post("/create",function(req, res) {
    // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
    var name = req.body.name;
    var badge = req.body.badge;
    var dob = req.body.dob;
    var isloved = req.body.isloved;
    
    let data = {
        name : name,
        badge : badge,
        dob : dob,
        isloved : isloved
    }
    let db_data = new db_conn(data)
    db_data.save(function (err, book) {
        if (err) return console.error(err);
        console.log(book.name + " saved to bookstore collection.");
      });
  
});
module.exports = router;

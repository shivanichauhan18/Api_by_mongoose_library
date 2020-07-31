var express = require('express'),
router = express.Router()
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
    mongoose.model('Blob').find({}, function (err, blobs) {
        if (err) {
            return console.error(err);
        } else {
            //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
        //     res.format({
        //         //HTML response will render the index.jade file in the views/blobs folder. We are also setting "blobs" to be an accessible variable in our jade view
        //       html: function(){
        //           res.render('blobs/index', {
        //                 title: 'All my Blobs',
        //                 "blobs" : blobs
        //             });
        //       },
        //       //JSON response will show all blobs in JSON format
        //       json: function(){
        //           res.json(infophotos);
        //       }
        //   });
        res.send(blobs)
        }     
  });
});


router.post("/s",function(req, res) {
    // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
    var name = req.body.name;
    var badge = req.body.badge;
    var dob = req.body.dob;
    var company = req.body.company;
    var isloved = req.body.isloved;
    //call the create function for our database
    mongoose.model('Blob').insertOne({
        name : name,
        badge : badge,
        dob : dob,
        isloved : isloved
    }, function (err, blob) {
          if (err) {
              res.send("There was a problem adding the information to the database.");
          } else {
              //Blob has been created
              console.log('POST creating new blob: ' + blob);
              res.format({
                  //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
                html: function(){
                    // If it worked, set the header so the address bar doesn't still say /adduser
                    res.location("blobs");
                    // And forward to success page
                    res.redirect("/blobs");
                },
                //JSON response will show the newly created blob
                json: function(){
                    res.json(blob);
                }
            });
          }
    })
});
module.exports = router;

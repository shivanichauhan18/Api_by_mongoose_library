
const mongoose = require('mongoose');
const db_conn = require("../config/connection")
 
// mongoose.connect(db_conn.url, {useNewUrlParser: true}, (err) => {
// if (!err) {
// console.log('Successfully Established Connection with MongoDB')
// }
// else {
// console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
// }
// }); 
mongoose.connect(db_conn.url);
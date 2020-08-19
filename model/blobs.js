const mongoose = require('mongoose');


var Schema = mongoose.Schema;
var blobSchema = new Schema({
  name: String,
  badge: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});
var detail = mongoose.model('Blob', blobSchema);
module.exports = detail

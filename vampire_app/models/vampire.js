const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vampireSchema = new Schema({
  name: String,
  hair_color: String,
  eye_color: String,
  dob: Date,
  loves: [String],
  location: String,
  gender: String,
  victims: Number,

});


// name: 'Count Chocula',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1971, 2, 13, 7, 47),
//   loves: ['cereal','marshmallows'],
//   location: 'Minneapolis, Minnesota, US',
//   gender: 'm',
//   victims: 2,


const vampire = mongoose.model('Vampire', vampireSchema);
module.exports = vampire;
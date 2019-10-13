// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js');
const vampireData = require('./populateVampires');
// 3. Connect your database and collection name
const DB_URL = 'mongodb://localhost:27017/sei5-vampires';
// 4. Open your mongoose connection
mongoose.connect(DB_URL, {
    useNewURLParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected.... TW Pride'))
    .catch((error) => console.log(error));
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

//NOTE very important, Need to delete the older data when adding new, or else replicate
// Vampire.deleteMany({}, function(err, newVampires){
//     if(err) {
//       console.log('Error occurred in remove', err);
//     } else {
//       console.log('removed all books');
  
//       // create new records based on the array books_list
//       Vampire.create(vampireData, (error, newVampires) => {
//         if(error) return console.log(error);
//         console.log('Success...' , newVampires);
//         mongoose.connection.close();
//     });
//     };
//   });
/* Vampire.insertMany(vampireData, (error, newVampires) => {
    if(error) return console.log(error);
    console.log('Success...' , newVampires);
    mongoose.connection.close();
}) */

// ### Add some new vampire data

// const newVampiresData = [
//     {
//         name: 'Count Mulla',
//         hair_color: 'brown',
//         eye_color: 'brown',
//         dob: new Date(1971, 2, 13, 7, 47),
//         loves: ['cereal','marshmallows'],
//         location: 'Minneapolis, Minnesota, US',
//         gender: 'm',
//         victims: 2000000,
//         title: 'Wish me Luck'
//       },{
//         name: 'Count Savage',
//         dob: new Date(937, 0, 24, 13, 0),
//         hair_color: 'brown',
//         eye_color: 'blue',
//         loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
//         location: 'Transylvania, Romania',
//         gender: 'm',
//         victims: 1238000
//       },{
//         name: 'Count Ellena ',
//         dob: new Date(1560, 8, 7, 22, 10),
//         hair_color: 'brown',
//         eye_color: 'brown',
//         loves: ['virgin blood', 'fancy cloaks','frilly collars'],
//         location: 'Nyírbátor, Hungary',
//         gender: 'f',
//         victims: 9800000
//       },{
//         name: 'Count Rosie',
//         dob: new Date(1760, 11, 9, 18, 44),
//         hair_color: 'blonde',
//         eye_color: 'blue',
//         loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
//         location: 'Auvergne, France',
//         gender: 'f',
//         victims: 3240000
//       }

// ]

// Vampire.create(newVampiresData, (error, newVampires) => {
//     if(error) return console.log(error);
//     console.log('Success...' , newVampires);
//     mongoose.connection.close();
// })

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/* Vampire.find({gender: 'f'}, (error, femaleVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', femaleVampires);
    }
}) */

//Vampires with greater that 500 kills,
/* Vampire.find({victims: {$gt: 500}}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
    }
} ) */

//Vampires with fewer or equal to 150 kills
/* Vampire.find({victims: {$lte: 150}}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
    }
} ) */


// have a victim count is not equal to 210234
/* Vampire.find({victims: {$ne: 210234}}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
    }
} )
 */
// have greater than 150 AND fewer than 500 victims
/* Vampire.find({victims: {$gt: 150, $lt: 500}}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
    }
} )
 */
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// have a title property
/* Vampire.find({title: {$exists: true }}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
    }
}) */
// do not have a victims property
/* Vampire.find({victims: {$exists: false }}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
    }
}) */
// have a title AND no victims
/* Vampire.find({title: {$exists: true }, victims: {$exists: false}}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
    }
}) */
// have victims AND the victims they have are greater than 1000
/* Vampire.find({victims: {$exists: true}, victims: {$gt: 1000}}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
    }
}) */

/////////////////////////////////////////////////
// ### Select with OR
// are from New York, New York, US or New Orleans, Louisiana, US
/* Vampire.find({$or: [{location: 'New York, New York, US'},{location: 'New Orleans, Louisiana, US'}]}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }
}) */
// love brooding or being tragic
/* Vampire.find({$or: [{loves: 'brooding'},{loves: 'being tragic'}]}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }
}) */
// have more than 1000 victims or love marshmallows
/* Vampire.find({$or: [{victims: {$gt: 1000}},{loves: 'marshmallows'}]}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }
}) */

// have red hair or green eyes
/* Vampire.find({$or: [{hair_color: 'red'},{eye_color: 'green'}]}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }
}) */
/////////////////////////////////////////////////
//### Select objects that match one of several values
// love either frilly shirtsleeves or frilly collars
/* Vampire.find({$or: [{loves: 'frilly shirtsleeves'},{loves: 'frilly collars'}]}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }
}) */
// love brooding
/* Vampire.find({loves: 'brooding'}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }
}) */
// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
/* Vampire.find({$or: [{loves: 'appearing innocent'},{loves: 'trickery'}, {loves: 'lurking in rotting mansions'}, {loves: 'R&B music'}]}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }
}) */
// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
/* Vampire.find({$and: [{loves: 'fancy cloaks'}, {loves: {$nin: ['top hasts', 
'virgin blood']}}]} , (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }  
}) */

/////////////////////////////////////////////////
//### Negative Selection
// love ribbons but do not have brown eyes
/* Vampire.find({$and: [{loves: 'ribbons'}, {eye_color: {$nin: ['brown']}}]} , (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }  
}) */
// are not from Rome
/* Vampire.find({location: {$nin: ['Rome, Italy']}} , (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }  
}) */
// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
/* Vampire.find({loves: {$nin: ['fancy cloaks', 
'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}} , (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }  
}) */
// have not killed more than 200 people
Vampire.find({victims: {$lt: 200}} , (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
        console.log(foundVampires.length);
    }  
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////

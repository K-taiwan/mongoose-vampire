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


/* Vampire.insertMany(vampireData, (error, newVampires) => {
    if(error) return console.log(error);
    console.log('Success...' , newVampires);
    mongoose.connection.close();
}) */

// ### Add some new vampire data

const newVampires = [
    {
        name: 'Count Mulla',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'm',
        victims: 2000000
      },{
        name: 'Count Savage',
        dob: new Date(937, 0, 24, 13, 0),
        hair_color: 'brown',
        eye_color: 'blue',
        loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
        location: 'Transylvania, Romania',
        gender: 'm',
        victims: 1238000
      },{
        name: 'Count Ellena ',
        dob: new Date(1560, 8, 7, 22, 10),
        hair_color: 'brown',
        eye_color: 'brown',
        loves: ['virgin blood', 'fancy cloaks','frilly collars'],
        location: 'Nyírbátor, Hungary',
        gender: 'f',
        victims: 9800000
      },{
        name: 'Count Rosie',
        dob: new Date(1760, 11, 9, 18, 44),
        hair_color: 'blonde',
        eye_color: 'blue',
        loves: ['frilly shirtsleeves', 'frilly collars', 'lurking in   rotting mansions', 'Louis'],
        location: 'Auvergne, France',
        gender: 'f',
        victims: 3240000
      }

]

/* Vampire.create(vampireData, (error, newVampires) => {
    if(error) return console.log(error);
    console.log('Success...' , newVampires);
    mongoose.connection.close();
}) */

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
Vampire.find({victims: {$gt: 150, $lt: 500}}, (error, foundVampires) => {
    if(error) {
        console.log(error);
        mongoose.connection.close();
    }   else {
        console.log('Success', foundVampires);
    }
} )

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

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

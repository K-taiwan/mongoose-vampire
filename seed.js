const vampireData = require('./populateVampires');



vampireData.Vampire.deleteMany({}, function(err, newVampires){
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log('removed all books');
  
      // create new records based on the array books_list
      vampireData.Vampire.create(vampireData, (error, newVampires) => {
        if(error) return console.log(error);
        console.log('Success...' , newVampires);
        mongoose.connection.close();
    });
    };
  });



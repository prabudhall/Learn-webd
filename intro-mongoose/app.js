const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/mngsDB', function(err) {
  if(err) {
    console.log("Error - ", err);
  }
  else {
    console.log("Connection Established");
  }
});
// after host mngsDB is the name of the database in which the operation is being performed

const colSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "$$$This message will be printed if name is missed while inserting documents$$$"]
  },
  rating: {
    type: Number,
    required: 1,
    min: 1,
    max: 10
  },
  review: String
});

const peapSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favfruit: colSchema
});

const col = new mongoose.model("coltb", colSchema);
// behind it will add 's' in the end of coltb ie collection name if not present and converts all letters to lowercase
// or pluralise the collection name
const peapcol = new mongoose.model("people", peapSchema);

const doc = {
  name: "Banana",
  rating: 8,
  review: "Eat good"
};

const many_array = [
  {
    name: "Banana",
    score: 8,
    review: "Eat good"
  },
  {
    name: "Apple",
    score: 4,
    review: "Nice eat"
  },
  {
    name: "Orange",
    score: 5,
    review: "Good One"
  }
];

const invalid = {
  name: "Any",
  rating: -80,
  review: "Eat good"
};

const people_array = [
  {
    name: "Name1",
    age: 23
  },
  {
    name: "Name2",
    age: 34
  },
  {
    name: "Name3",
    age: 42
  }
];

// for saving using new to save that in a const variable and then saving/using it
// const tosvcol = new col(doc);
// tosvcol.save((err)=>{
//   if(err) {
//     console.log(err);
//   }
//   else {
//     console.log("Value Saved");
//   }
// });

// for saving directly
// col(invalid).save();


// for inserting many documents at once
// peapcol.insertMany(people_array, function(err) {
//   if(err) {
//     console.log("Error - ", err);
//   }
//   else {
//     console.log("Inserting many documents at once Successful");
//   }
// });


// to show that collection. It takes function that takes 2 arguments error and the data inside collections
// col.find(function(err, got){
//   if(err) {
//     console.log("Error : ", err);
//   }
//   else {
//     mongoose.connection.close();
//     // console.log(got);
//
//     // for(var i = 0; i < got.length; i++) {
//     //   console.log(got[i].name);
//     // }
//
//     got.forEach((it) => {
//       console.log(it.name);
//     });
//
//   }
// });

// need to store the document using find function inside a variable so that i can use that variable to update that document inside relation embed
// async function found() {
//   var fdoc;
//   await col.findOne({name: "Apple"}, (er, doc)=>{
//     if(er) {
//       console.log(er);
//     }
//     else {
//       console.log(doc);
//       fdoc = doc;
//     }
//   });
//   return fdoc;
// }
// console.log(found);

// console.log(col.find({name: "Apple"}));

// to update // didn't follow schema rules
// peapcol.updateOne({name: "Name1"}, {favfruit: col.findOne({name: "Apple"})}, function(err) {
//   if (err) {
//     console.log("Error : ", err);
//   }
//   else {
//     mongoose.connection.close();
//     console.log("Updated Successfully");
//   }
// });


// to delete one // deletes the first hit
// col.deleteOne({name: "Banana"}, function(err) {
//   if (err) {
//     console.log("Error : ", err);
//   }
//   else {
//     mongoose.connection.close();
//     console.log("Deleted Successfully");
//   }
// })


// to delete many
// col.deleteMany({name: "Banana"}, function(err) {
//   if (err) {
//     console.log("Error : ", err);
//   }
//   else {
//     mongoose.connection.close();
//     console.log("Deleted Successfully");
//   }
// });

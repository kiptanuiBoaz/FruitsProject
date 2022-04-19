// ejshint esversion:6
const mongoose = require ("mongoose");


mongoose.connect("mongodb://localhost:27017/fruitsDB"
,{useNewUrlParser: true});

const fruitSchema= new mongoose.Schema({
    name: { type: String,
            required: (true,"Please check your name entry no name entered")
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    reviews:String

});
const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit= new Fruit ({
    // name: "Apple ",
    rating:10,
    reviews: "Peaches are the best."
});

// fruit.save();    
const personSchema = new mongoose.Schema({
     name : String,
     age : Number,
     favouriteFruit: fruitSchema 
});



const mango = new Fruit({
    name: "mango",
    score: 9,
    review: "juicy fruit."
});

mango.save();

const Person = mongoose.model("Person",personSchema);

// const person = new Person({
//     name:"Amy",
//     age: 12,
//     favouriteFruit: pineapple
// });

// person.save();

const kiwi = new Fruit({
     name:"Kiwi",
     score: 4,
     review:"Awesome!"

});
const banana = new Fruit({
    name:"Banana",
    score: 3,
    review:"Too yellow!"

});
const orange = new Fruit({
    name:"Orange",
    score: 8,
    review:"Lemon in color!"

});
// Fruit.insertMany([kiwi,orange,banana],function(err){
// if (err){
//     console.log(err);

// }
// else{
//     console.log("Succesfully saved all the fruits to fruitsDB");
// }
// });


    
   
Fruit.updateOne({name:  "john"},{favouriteFruit: mango}, function(err){
    if (err){
        console.log(err);

    }
    else {
        console.log("succesfully updated  the document");
    }
});

// Person.deleteMany({name:  "John"}, function(err){
//     if (err){
//         console.log(err);

//     }
//     else {
//         console.log("succesfully deleted the entries");
//     }
// });
Fruit.find(function(err,fruits){
    if (err){
        console.log(err);

    }
    else{
        // mongoose.connection.close();
  
        
        for (i=0; i<=4; i++){
            console.log(fruits[i].name);
        }
        // fruits.forEach(function(fruit){
        //     console.log(fruit.name);
        // });
        
        
    };
});


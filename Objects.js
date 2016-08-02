var array = [ function(){console.log('hello there');} ]

//JSON object JavaScript Object Notation
var object = { helloFunc: function(){console.log('hello there');} }


var dojo = {};                                 // creates an empty object
dojo = {
  name: 'Coding Dojo',                         // property can store a string
  number_of_students: 25,                      // property can store a number
  instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
  location: {                                  // property can even store another object!
    city: 'San Jose',
    state: 'CA',
    zipcode: 95112
  }
}

console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
console.log(dojo["name"]);                     // or bracket [] notation (note: specify key in quotes)

console.log('before chaning values');
console.log(dojo.name, dojo.location);
dojo.number_of_students = 40;                  // we can reassign any of the properties
dojo.location.city = "Bellevue";
dojo.location.state = "Washington";
dojo.location.zipcode = "unknown";             // note that we can change this from integer to string
dojo.phone_number = 1234567890 ;

console.log('after chaning values')
console.log(dojo.name, dojo.location, dojo.phone_number);


//simple object:
var myDonut = {
  frosting: 'glazed',
  type: 'old fashioned',
}

//It is very common to see arrays filled with objects, where the objects all have the keys but with different values.
var glazedDonuts = [
  {
    frosting: 'glazed',
    type: 'old fashioned',
    age: '45',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    type: 'regular',
    age: '5',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    type: 'jelly filled',
    age: '1',
    time: 'seconds'
  }
];

console.log('simple', myDonut);
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('object in array', glazedDonuts);

// You could then go the donut owner and ask something like: Can I buy the 1st donut on the rack if it 
// has been out of the oven for fewer than 25 minutes? The code conversation for that would be:
var purchase;
//You
if(glazedDonuts[1].age < 25 && (glazedDonuts[1].time == 'seconds' || glazedDonuts[1].time == 'minutes')){
  //shop owner
  purchase = glazedDonuts[0];
}
else {
  console.log('sorry its been out a bit longer');
}
console.log('############################################');
console.log(purchase);
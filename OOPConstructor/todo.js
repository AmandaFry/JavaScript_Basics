console.log('1st problem')
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('2nd')
console.log('###########################################');
console.log('3rd')
console.log('...........................................');
console.log('4th')
console.log('*******************************************');
console.log('5th')
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

// Object Constructors are just functions that act as blueprints 
// for creating particular objects.

//#Capitalized NinjaConstructor. This is a JavaScript convention to indicate 
// that the function is an Object Constructor.
//#Created an object inside of the function and returned it. This is the specific instance 
// of the object being created.
// Redefined Michael’s introduce method (remember that these instances are just simple 
// JavaScript objects, so we can manipulate them like we've always been able to)


function NinjaConstructor(name, age, prevOccupation) {
  var ninja = {};     // the object that will eventually be returned
/*
Addition of properties to ninja.
*/
  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation
/*
Addition of methods to ninja
*/
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
/*
return ninja
*/
  return ninja;    
}


                      // Create the Andrew Ninja
var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
Andrew.introduce();
                      // Create the Michael Ninja
var Michael = NinjaConstructor("Michael", 34, "Founder");
                      // here we redefine the introduce method for a particular "Instance" or Object
Michael.introduce = function() {
  console.log("I am the Sensei!")
}
Michael.introduce();
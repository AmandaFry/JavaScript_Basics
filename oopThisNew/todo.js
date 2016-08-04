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

function NinjaConstructor(name, prevOccupation) {
  var ninja = {}; // <-- PAY ATTENTION TO THIS LINE!
  ninja.name = name;
  ninja.prevOccupation = prevOccupation
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
  return ninja; // <-- AND THIS LINE!
}

/* The two lines we are drawing your attention to are the lines where we create the object called ninja and then return the object called ninja.
this and new work in concert to eliminate those two lines!

Stepping through the process:
1. We can replace ninja with this.
*/

function NinjaConstructor(name, prevOccupation) {
  var this = {}; // <-- PAY ATTENTION TO THIS LINE!
  this.name = name;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
  return this; // <-- AND THIS LINE!
}

// 2. var this = {}; and return this; can and should be removed...
function NinjaConstructor(name, prevOccupation) {
  this.name = name;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
}

// 3. ... because the new keyword placed before invoking the function will do that for us!
function NinjaConstructor(name, prevOccupation) {
  this.name = name;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
}
var dylan = new NinjaConstructor('Dylan', 'Construction Worker');

/* The new keyword creates the object “this” inside of our function and then returns it so that we can use it to create an object! 
Now we don’t need to put var this = {} or return this in our constructor!

In JavaScript you'll often see the new and this keywords, and it's important to understand how they work. */


// One common pitfall using this:
// To the above code, add the following:

console.log(this)
//after var dylan ... add:
var nikki = NinjaConstructor('Nikki','Historian');
// What's nikki?

// The code below can prevent the problems caused by not using new on a constructor 
// (use it inside the constructor function):

if (!(this instanceof NinjaConstructor)) {
   // the constructor was called without "new".
   return new NinjaConstructor(name, prevOccupation);
 }
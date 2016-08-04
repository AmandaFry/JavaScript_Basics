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

// Scoping "this"
// What if you tried to access the this keyword inside of a private method? Run this code:

function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("printing this line 19", this); // What will print here?
  }
  // PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation
  // PUBLIC METHODS DECLARED HERE
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();           
    console.log('printing privateVar line 29', privateVar);
  }
}
var Speros = new Ninja("Speros", 24, "MBA");
Speros.introduce();
// Inside of the private method, this refers to the global Window or Node object 
//(it depends in which environment you're running the script)! 
//This is bad; you never want to mess with the built in globals because it can create very difficult-to-find bugs. 
//There are a few different strategies we can use to make sure the this we're talking about inside a private method 
//is the object instance.One way is to capture a snapshot of this and store it in a variable that you call something else, 
//which any method (public or private) is free to reference. 

function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var self = this; // HERE WE HAVE DECLARED SELF to EQUAL THE NEW OBJECT WE CREATE WITH NEW
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method for " + self.name);     // refer to name via self
    console.log("printing this line 47",this);
  }
  //PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod(); //where calling line 47 again     
    console.log('printing privateVar line 56 - ', privateVar);
  }
}
var Speros = new Ninja("Speros", 24, "MBA");
Speros.introduce();
//We declared a private variable self that hangs on to the Ninja object constructed when we call 
//var Speros = new Ninja('Speros', 29, 'MBA');. 
//To access the constructed object from within private methods we can then refer to self.

//Usage of this with private variables can be challenging, especially when we are passing data from object to object. 
//It’s good training to console.log(this); and console.log(self) 
// if you've declared it; while we work through this section! 
//Instead of self, its not uncommon practice to use: var _this = this; or var my = this;.

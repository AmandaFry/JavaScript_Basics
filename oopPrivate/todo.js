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

// private variables are data that's accessible within the object but 
//not as a property of the object. We can create private methods and variables 
//using what we know about function scoping!

function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method");
  }
  // PUBLIC
  this.name = name;              
  this.age = age;
  this.prevOccupation = prevOccupation
  this.introduce = function() {   
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod(); // this works since it is a scope that can access privateMethod!
    console.log(privateVar);      // this works too!
  }
}
//Create a new ninja:

var Pariece = new Ninja("Pariece", 24, "TFA Teacher");
// try this:
Pariece.privateMethod();  
// or this:
privateMethod();
// or this:        
Pariece.privateVar;
// none of these work. Think about the scope of each.
// Notice the two variables at the beginning of the Ninja constructor function? These are private! 
//Why? Because of function scoping! They're limited to the context of the particular function (Ninja) 
//that was invoked -- remember how the var keyword floats until it hits the enclosing function (cage) 
//and can’t be accessed outside? That’s function scoping, and it's the way we create privates within our constructors.

//That means than any function or value that's not linked to the this keyword is private!

//Why are privates useful?
//Private variables can be useful to protect your objects from being altered in unintended ways. 
//For example, say objects built with a User constructor function have a social security number, 
//which you definitely don't want your program to alter. You might make it private:

function User(name, ssn){
  var social = ssn;
  this.name = name;
}
var mike = new User('Mike', 274164398);
//You've prevented any part of your program from inadvertently changing the social security number; 
//mike.social = 672159826; just won't work.

//But what we have is a bit lame. Sure, we can't change the data, but we can't view the data either! 
//Luckily, we can create a public method that lets your program read the information without ever being able to change it! 
//Accessing a variable instantiated in the User function even well after the User function finished running is 
// taking advantage of something called closure.

function User(name, ssn){
  var social = ssn;
  this.name = name;
  // Adds a so-called 'getter' function to allow reading private variables
  this.getSSN = function(){
    return social;
  }
}

var mike = new User('Mike', 274164398);
console.log(mike.getSSN()); // 274164398
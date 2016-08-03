

// var bod = document.body;
// bod = ""; // this is more fun if it's a random page with stuff already on it (like the learning platform for example).
// bod = "Hello World";

var bod = document.body;
for (var i = 0; i < 10; i ++){
  bod += "<p> This has gone through the loop completely: " +i+ " times </p>";
}
console.log(bod);

console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');


// An anonymous function is a function that was declared without any named identifier to 
//refer to it. As such, an anonymous function is usually not accessible after its initial creation.

// Normal function definition:
console.log(" - normal function")

function hello() {
  console.log('Hello world');
}
hello();


//Anonymous function definition:
console.log(" - Anonymous function")

var anon = function() {
  console.log('I am anonymous');
};
anon();

console.log('1st problem')
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');

var anonSum = function(){
	var mySum = 0;
	for(var i = 1; i<=500; i++){
		mySum = mySum + i;
	}
	console.log('anonymous function, sum of numbers', mySum);
}
anonSum();
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('2nd problem')
console.log('###########################################');

var anonMin = function(){
	//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
	var myArray = [1, 5, 90, 25, -3, 0];
	var min = myArray[0];
	for (var i = 1; i < myArray.length; i++){
		if (myArray[i] < min){
			min = myArray[i] ;
		}
	}
	console.log(min);
}
anonMin();
console.log('###########################################');
console.log('3rd')


//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
var anonAvg = function(){
	var avgArray = [1, 5, 90, 25, -3, 0];
	var avg = 0;
	var finalAvg;

	for (var i = 1; i < avgArray.length; i++){
		avg = avg + avgArray[i];
	}
	finalAvg = avg/avgArray.length;
	console.log(finalAvg);
}
anonAvg();
console.log('...........................................');
console.log('4th')
console.log('solve as JSON object')

//this need to be anonymus as the others. As an on object creating a JSON object.
var person = {
	//properties
	name: 'Amanda',
	distance_traveled: 0,
	//methods
	say_name: function(){console.log(this.name)},
	say_something: function(saying){console.log(this.name + ' says ' + saying)},
	walk: function(){console.log(this.name + ' is walking'); this.distance_traveled+=3;},
	run: function(){console.log(this.name + ' is runing'); this.distance_traveled+=10;},
	crawl: function(){console.log(this.name + ' is crawling'); this.distance_traveled+=1;},
}
//I can use say_name method to print the name property
person.say_name();
//I have to print the other porprt like this
console.log(person.distance_traveled);
person.say_something('lets walk');
person.walk();
console.log(person.distance_traveled);
person.say_something('lets run');
person.run();
console.log(person.distance_traveled);
person.say_something('lets crawl');
person.crawl();
console.log(person.distance_traveled);

console.log('*******************************************');
console.log('5th')
console.log('solve as function')

function woman(){
	this.name = 'Amy';
	this.distance_traveled = 0;
	this.say_name = function(){console.log(this.name)};
	this.say_something = function(saying){console.log(this.name + ' says ' + saying)};
	this.walk = function(){console.log(this.name + ' is walking'); this.distance_traveled+=3;};
	this.run = function(){console.log(this.name + ' is running'); this.distance_traveled+=10;};
	this.crawl = function(){console.log(this.name + ' is crawling'); this.distance_traveled+=1;};
}

var Amy = new woman()
Amy.say_name();
console.log(Amy.distance_traveled);
Amy.say_something("lets crawl");
Amy.crawl();
console.log(Amy.distance_traveled)
Amy.say_something("lets walk");
Amy.walk();
console.log(Amy.distance_traveled);;
Amy.say_something("lets run");
Amy.run();
console.log(Amy.distance_traveled);

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

/*
school provided answer
This is a basic person object, declared as an object literal, it has
  properties: name, distanceTraveled,
  methods: aayName, saySomething, walk, run, crawl
  "DON'T FORGET THE COMMAS AFTER EACH METHOD/PROPERTY"
*/

var person = {
  name : "Charlie",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  },
  chewGum:function(){
    console.log("I can walk and chew gum, but I can't chew gum and walk...");
  }
}

person.walk().chewGum(); // why can I do this?
// but not this:
// person.chewgum().walk();

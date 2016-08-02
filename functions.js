function myFunctionName(firstParameter, secondParameter){
  var myProduct = firstParameter * secondParameter;
  return myProduct
}

myFunctionName(5,14);
console.log(myFunctionName(5,14));

var returnedVal = myFunctionName(5,3);
console.log(returnedVal);

function countDown(number){
  while(number > 0){
    console.log(number);
    number --;
  }
}
countDown(10);

// This means start at i = 0; as long as i < 10 keep looping; after every loop add 1 to i
for (var i = 0; i < 10; i++) {     // notice the var keyword preceding our variable name as always  
    console.log(i);
}
// anatomy: var i = 0; <-- a starting variable usually countable.
// i < 10; <-- logic of when to end (usually just 1 thing, but you can use complex logic if you want to/need to);
// i ++ <-- mechanism for incrementing i to reach the logical end

var array = [4,1,6,9,44];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);  
}

var ninja = {
  name:'Susanna',
  MEAN_belt:10,
  iOS_belt:10,
  python_belt:10,
  php_belt:9, // she hadn't mastered deploying yet!
  ruby_belt:9.75 // done in 1.5 hrs though!
}
for (var key in ninja) {
  if (ninja.hasOwnProperty(key)) {
    console.log(key);
    console.log(ninja[key]);
  }
}

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
awesome();
function awesome() {
  console.log("too good to be true");
}
console.log('############################################');

//I can declaier functions like string and stuff
var varFunction;



var varFunction = function() {
  console.log("How will this get hoisted?");
}

// varFunction();

console.log('...........................................');

var hello = "interesting";
function example() {
  var hello = "hi!";
  console.log(hello);
}
example();
console.log(hello);


//declarations get hoisted 
var hello;                 
function example() {       
  var hello;               
  hello = "hi";            
  console.log(hello)       
}
//assignments and invocation maintain order
hello = "interesting";     
example();                        
console.log(hello);
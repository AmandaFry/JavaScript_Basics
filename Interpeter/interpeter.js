console.log('0 - sample problem file');
var hello = "interesting";
function example() {
  var hello = "hi!";
  console.log(hello);
}
example();
console.log(hello);

console.log('0 - rearraniged code');
//declarations get hoisted - raised above
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

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('1st problem')

console.log(first_variable);
var first_variable = "Yipee I was first!";

function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}
console.log(first_variable);

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('1st solution')
console.log(first_variable);
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable)
}

first_variable = "Yipee I was first!";
console.log(first_variable);

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('2nd problem')

var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

console.log('###########################################');
console.log('3rd')
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

console.log('...........................................');
console.log('4th')
console.log('*******************************************');
console.log('5th')
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

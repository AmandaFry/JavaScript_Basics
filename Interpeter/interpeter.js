console.log('0 - sample problem file');
var hello = "interesting";
function example() {
  var hello = "hi!";
  console.log(hello);
}
example();
console.log(hello);

console.log('0 - rearranged code');

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
//declarations get hoisted - raised above
//needed to change the vairable name as it was decalred form the above code. 
var first_sol_variable;
function firstFunc() {
  first_sol_variable = "Not anymore!!!";
  console.log(first_sol_variable)
}
//assignments and invocation maintain order
console.log(first_sol_variable); //the variable is created but nothign is assigend to it yet. 
first_sol_variable = "Yipee I was first!";
console.log(first_sol_variable);

console.log('###########################################');
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
console.log('2nd solution')

var foodSol;
function eat() {
  foodSol = "half-chicken";
  console.log(foodSol);
  var foodSol = "gone";       // CAREFUL!
  console.log(foodSol);
}
foodSol = "Chicken";
eat();
console.log(foodSol);


console.log('...........................................');
console.log('3rd problem')
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

console.log('...........................................');
console.log('3rd solution')
var new_word_sol;
function lastFunc() {
  new_word_sol = "old";
}
new_word_sol = "NEW!";
console.log(new_word_sol);

console.log('*******************************************');
console.log('5th')
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');


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

var mySum = 0;
for(var i = 1; i<=500; i++){
	mySum = mySum + i;
}
console.log(mySum);

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');


console.log('2nd')

//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
var myArray = [1, 5, 90, 25, -3, 0];
var min = myArray[0];
for (var i = 1; i < myArray.length; i++){
	if (myArray[i] < min){
		min = myArray[i] ;
	}
}
console.log(min);
console.log('###########################################');
console.log('3rd')


//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
var avgArray = [1, 5, 90, 25, -3, 0];
var avg = 0;
var finalAvg;

for (var i = 1; i < avgArray.length; i++){
	avg = avg + avgArray[i];
}
finalAvg = avg/avgArray.length;
console.log(finalAvg);
console.log('...........................................');
console.log('4th')
console.log('*******************************************');
console.log('5th')
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
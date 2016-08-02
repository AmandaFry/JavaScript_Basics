//Go through each value in array x, where x = [3,5,‘Dojo’, ‘rocks’, ‘Michael’, ‘Sensei’]. Log each value.
console.log('iterate through an array');
var x=[3,5,'Dojo','rocks', 'dog', 'sleep'];

for (var i = 0; i< x.length; i++){
	console.log(x[i]);
}
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
//Add a new value (100) in the array x using a push method.
console.log('add a value with push');
x.push(100);

for (var i = 0; i< x.length; i++){
	console.log(x[i]);
}
console.log('############################################');

//Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now. 
console.log('reassign value x');
x = ["hello", "world", "JavaScript is Fun"];

for (var i = 0; i< x.length; i++){
	console.log(x[i]);
}
console.log('...........................................');

//Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.
var mySum = 0;
for(var i = 1; i<=500; i++){
	mySum = mySum + i;
}
console.log(mySum);
console.log('*********************************************');
//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it
var myArray = [1, 5, 90, 25, -3, 0];
var min = myArray[0];
for (var i = 1; i < myArray.length; i++){
	if (myArray[i] < min){
		min = myArray[i] ;
	}
}
console.log(min);
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
var avgArray = [1, 5, 90, 25, -3, 0];
var avg = 0;
var finalAvg;

for (var i = 1; i < avgArray.length; i++){
	avg = avg + avgArray[i];
}
finalAvg = avg/avgArray.length;
console.log(finalAvg);

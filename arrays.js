var emp_array = [];
var string_array = ['hi',"hello",'are', "up"];
var x = 15;

console.log("variableS", emp_array,string_array,x);
console.log('seconf value', string_array[1]);
console.log('legth of array', string_array.length);
string_array.push('awsome');
console.log(string_array);
string_array.pop();
console.log(string_array)


// var arr = [3, 6];
// arr[234] = "hi";
// //
// console.log( arr.length ); // 235
// console.log( arr[34] ); // undefined

var arr = [3, 6];
arr[234] = "hi";
//
console.log( arr.length ); // 235
console.log( arr[34] ); // undefined
arr.length = 3;
console.log( arr[34] );
console.log( arr[234] );
console.log( arr.length );
arr.length = 500;
console.log( arr[234] );
console.log( arr.length );
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

// We are going to create our very own constructor. Create a VehicleConstructor that takes 
// in the name, number of wheels, and number of passengers. Then complete the following tasks:
//  - Each vehicle should have a makeNoise method
//  - Using the constructor, create a Bike
//  - Redefine the Bike’s makeNoise method to print “ring ring!”
//  - Create a Sedan
//  - Redefine the Sedan’s makeNoise method to print “Honk Honk!”
//  - Using the constructor, create a Bus
//  - Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​

function VehicleConstructor(name, wheels, passangers){
	var vehicle = {};

	vehicle.name = name
	vehicle.wheels = wheels;
	vehicle.passangers = passangers;

	//put this here to show the informaiton passed on
	console.log("I am a " +name+" I have "+wheels+" wheels and I hold "+passangers+" passangers")
	
	vehicle.makeNoise = function(){
		console.log("I am making noise")
	}

	return vehicle;
}

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
var bike = new VehicleConstructor("blue bike",2,1);
bike.makeNoise();
bike.makeNoise = function(){
	console.log("honk honk");
}
bike.makeNoise();
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');

console.log('###########################################');
var sudan = new VehicleConstructor("pink sudan", 4, 5);
sudan.makeNoise = function(){
	console.log("honk honk");
}
sudan.makeNoise();
console.log('###########################################');

console.log('*******************************************');
var bus = new VehicleConstructor("Ikarus bus", 8, 21);
bus.makeNoise();
console.log('*******************************************');



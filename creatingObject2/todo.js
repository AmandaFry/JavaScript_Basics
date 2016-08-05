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

/* Modify your VehicleConstructor (from earlier) to use this & new (and follow the JS conventions talked about in the previous chapters). To recap, here were the requirements from Part I:

Create a vehicleConstructor that takes in the name, number of wheels, and number of passengers
Each vehicle should have a makeNoise method
Using the constructor, create a Bike
redefine the Bike’s makeNoise method to print “ring ring!”
Using the constructor, create a Sedan
redefine the Sedan’s makeNoise method to print “Honk Honk!”
Using the constructor, create a Bus
Give the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count 
Then make the following modifications:

Have the Vehicle constructor also take in a “speed”
Store the speed as an attribute
Create a private variable called distance_travelled that starts at 0
Create a private method called updateDistanceTravelled that increments distance travelled by speed
Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
Add a method called checkMiles that console.logs the distance_travelled


*/
function VehicleConstructor(name, wheels, passangers, speed){
	//public section
	this.name = name
	this.wheels = wheels;
	this.passangers = passangers;
	this.speed = speed;

	//put this here to show the informaiton passed on
	console.log("I am a " +name+" I have "+wheels+" wheels and I hold "+passangers+" passangers")
	
	this.makeNoise = function(){
		console.log("I am making noise")
	}

	//move the vehicle calling the private functions
    this.move = function(){
        updateDistanceTravelled();
    }
    //displaying how much it moved
    this.checkMiles = function(){
        console.log("Miles I moved is: " + distance_travelled);
    }

	//private section
	var distance_travelled = 0;
	var self = this;
	var updateDistanceTravelled = function(){
		distance_travelled = distance_travelled + self.speed;
	}
}

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
var bike = new VehicleConstructor("blue bike", 2, 1, 2);
bike.makeNoise();
bike.makeNoise = function(){
	console.log("honk honk");
}
bike.makeNoise();
bike.move();
bike.checkMiles();
bike.move();
bike.move();
bike.checkMiles();
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');

console.log('###########################################');
var sudan = new VehicleConstructor("pink sudan", 4, 5, 45);
sudan.makeNoise = function(){
	console.log("honk honk");
}
sudan.makeNoise();
sudan.move();
sudan.checkMiles();
console.log('###########################################');

console.log('*******************************************');
var bus = new VehicleConstructor("Ikarus bus", 8, 21, 25);
bus.makeNoise();
bus.move();
bus.checkMiles();
console.log('*******************************************');




"use strict";
/* Modify your Vehicle Class to take advantage of Prototypes!

To recap, here is what we did in Parts I & II:

Create a VehicleConstructor that takes in the name, number of wheels, and number of passengers

Each vehicle should have a makeNoise method
Using the constructor, create a Bike
redefine the Bike’s makeNoise method to print “ring ring!” Using the constructor, create a Sedan
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
Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter.

You may have to change some private variables/methods to attributes to make all of the functionality work.

Then make the following additions:

Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now. */


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



function vehicleConstructor(name, wheels, passengers, noise, speed){
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.noise = noise;
    this.speed = speed;
    
    //cannot make vhName, makeNoise and pickUpPassengers as it will vary between instance
    this.vehName = function(){
        console.log("I am a: " + this.name);
    }
    this.makeNoise = function(){
        console.log(this.noise);
    }
    this.pickUpPassengers = function(){
        this.passengers = this.passengers + passengers;
        console.log("The number of passengers I hold is:" + this.passengers);
    }

    //prototype implemented, this ill be a same for everyone
    vehicleConstructor.prototype.move = function(){
        updateDistanceTravelled();
       
    }

    //prototype implemented, this will be the same for everyone
    vehicleConstructor.prototype.checkMiles = function(){
        console.log("Miles I moved is: " + distance_travelled);
    }

    var distance_travelled = 0;
    var self = this;
    var updateDistanceTravelled = function(){
        distance_travelled = distance_travelled + self.speed;
    }
    //generate VIN number could be prototyped
    vehicleConstructor.prototype.VINGenerate = function (){
           var VINstart = "1F4RX13P7K5";
           var VINend =  Math.floor(Math.random() * 1000000);
           console.log(VINstart + VINend);
    }

}

var Bike = new vehicleConstructor("Blue bike", 2,1, "ring ring!");
Bike.vehName();
Bike.makeNoise();

var Sedan = new vehicleConstructor("Big car", 4, 2, "Honk Honk!");
Sedan.vehName();
Sedan.makeNoise();
Sedan.VINGenerate();

var Bus = new vehicleConstructor("Bus", 8, 4, "Bee Beep!");
Bus.vehName();
Bus.makeNoise();
Bus.pickUpPassengers();
Bus.pickUpPassengers(); 
Bus.pickUpPassengers();
Bus.VINGenerate();

var car = new vehicleConstructor("Pretty car", 4, 2, "ding ding", 4);
car.vehName();
car.makeNoise();
car.move();
car.move();
car.checkMiles();
car.VINGenerate();

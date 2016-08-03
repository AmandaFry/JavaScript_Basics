console.log('1st problem')
function personConsructer(name){
  var person = {
    name:name,
    distance_traveled:0,
    say_name: function(){ console.log(this.name)},
    say_something:function(phrase){console.log(this.name+' thinks '+phrase)},
    walk:function(){console.log(this.name +' is walking'); this.distance_traveled+=3;} ,
    run: function(){console.log(this.name +' is running'); this.distance_traveled+=10;},
    crawl:function(){console.log(this.name +' is crawling'); this.distance_traveled+=1;},
    }
  return person;
}
var Bagheera = personConsructer('Bagheera');
console.log(Bagheera);
Bagheera.say_name();
Bagheera.walk();
console.log(Bagheera.distance_traveled);
Bagheera.run();
console.log(Bagheera.distance_traveled);
Bagheera.crawl();
console.log(Bagheera.distance_traveled);
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
console.log('2nd')
function personConstructor(name){
    var person = {}; //need to create a dictionary to use the other values
    person.name=name;
    person.distance_traveled = 0;
    person.say_name =  function(){
        console.log("my name is: ", person.name);
    }
    person.say_something = function(val){
        console.log(person.name + ' '+ val);
    }
    person.walk = function(){
        person.distance_traveled = 3;
        console.log(person.name +" is walking" + " she moved " + person.distance_traveled +" meters");
    }
    person.run = function(){
        person.distance_traveled = 10;
        console.log(person.name + " is running" + " she moved " + person.distance_traveled +" meters");
    }
    person.crawl = function(){
        person.distance_traveled = 1;
        console.log(person.name + " is crawling" + " she moved " + person.distance_traveled +" meters");
    }    
    return person;      
}
var mypersonConst = personConstructor("Brianna");
mypersonConst.say_name();
mypersonConst.say_something("is happy");
mypersonConst.walk();
mypersonConst.run();
mypersonConst.crawl();

console.log('###########################################');
console.log('3rd')
console.log('...........................................');
console.log('4th')
function ninjaConstructor (name,cohort){
  var ninja = {
    name:name,
    cohort:cohort,
    belt_level:0,
    status:function(){
      var belt_name = ['yellow','red','black'];
      console.log(name +" is now a "+belt_name[ninja.belt_level]+'belt!');
      },
    levelUp:function(){
      ninja.belt_level+=1;
      ninja.status();
      },
    }
  ninja.status();
  return ninja;
}

var Amanda = ninjaConstructor('Amanda','July');
Amanda.levelUp();
Amanda.levelUp();

console.log('*******************************************');
console.log('5th')
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');


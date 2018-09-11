var fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data){
    console.log(data);
});


console.log('test');

/*
var readMe = fs.readFileSync('readme.txt', 'utf8'); //filename, encoding
fs.writeFileSync('writeMe.txt', readMe);
*/



//console.log(readMe);



//code




var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
   person.on('speak', function(msg){
       console.log(person.name + ' said: ' + msg);
   }); 
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');


var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
    console.log(msg);
});

myEmitter.emit('someEvent', 'the event was emitted');

/*

element.on('click', function(){
    
});
*/
var stuff = require('./stuff');



console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));

function callFunction(fun){
    fun();
}

/*
function sayHi(){
    console.log('hi');
}

sayHi();

*/
// function expression

var sayBye = function(){
  console.log('bye');
};

callFunction(sayBye);




// console.log(__dirname);
// console.log(__filename);

/*
var time = 0;

var timer = setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
    if(time > 5){
        clearInterval(timer);
    }
}, 2000);

/*
setTimeout(function(){
    console.log('3 seconds have passed');
}, 3000);
*/

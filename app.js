// Function that calls another function

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

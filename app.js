var express = require('express');
<<<<<<< HEAD

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    // res.send('this is the home page');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
   // res.send('this is the contact page') 
});

app.get('/profile/:name', function(req, res){
   var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
   res.render('profile', {person: req.params.name, data: data});   
   // res.send('You requested to see a profile with the name of ' + req.params.name);    
});

app.listen(process.env.port);



/*
var http = require('http');
var fs = require('fs');
=======
>>>>>>> set-3

var app = express();

<<<<<<< HEAD
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact-us'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});
*/
    /*
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('feed me popcorn');
    */


    /*
    var myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    res.end(JSON.stringify(myObj));
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res); 
    */

// server.listen(process.env.PORT, process.env.IP);
// console.log('yo dawgs, now listening to port');


/*

myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    myWriteStream.write(chunk);
   // console.log(chunk);
});

*/




/*
var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
*/

=======
app.set('view engine', 'ejs');
>>>>>>> set-3

app.get('/', function(req, res){
    res.render('index');
    // res.sendFile(__dirname + '/index.html');
    // res.send('this is the home page');
});

app.get('/contact', function(req, res){
     res.render('contact');
     //res.sendFile(__dirname + '/contact.html');
   // res.send('this is the contact page') 
});

app.get('/profile/:name', function(req, res){
   var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
   res.render('profile', {person: req.params.name, data: data});   
   // res.send('You requested to see a profile with the name of ' + req.params.name);    
});

app.listen(process.env.port);


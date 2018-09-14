var express = require('express');

var app = express();

app.set('view engine', 'ejs');

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


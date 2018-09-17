var express = require('express');
var bodyParser= require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urleconded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
/*
app.use('/assets', function(req, res, next){
    // middleware 
    console.log(req.url);
    next(); // end of this middleware, go to next middleware
});
*/

app.get('/', function(req, res){
    res.render('index');
    // res.sendFile(__dirname + '/index.html');
    // res.send('this is the home page');
});

app.get('/contact', function(req, res){
    // console.log(req.query);
     res.render('contact', {qs: req.query});
     //res.sendFile(__dirname + '/contact.html');
   // res.send('this is the contact page') 
});

app.post('/contact', urlencodedParser, function(req, res){
     console.log(req.body);
     res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
   var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
   res.render('profile', {person: req.params.name, data: data});   
   // res.send('You requested to see a profile with the name of ' + req.params.name);    
});

app.listen(process.env.port);


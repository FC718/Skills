// Load express
const express = require('express');
const path = require('path');


// require the Students "database"
const studentDb = require('./data/students')

// Create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)

// Define a "root" route directly on app
// Next lesson we will use better practice routing
app.get('/', function(req, res){
    // Path MUST start with a leading slash when doing redirect!
    res.redirect('/students');
});

app.get('/home', function(req, res) {
    // Never begin the name of the template 
    // with a forward slash
    res.render('home');
});

app.get('/students', function(req, res){
const students = studentDb.getAll();
res.render('students/index', {
    students});
});


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});

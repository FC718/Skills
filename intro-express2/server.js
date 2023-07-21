// Load express
const express = require('express');
const path = require('path');

// require the To Do "database"
const todoDb = require('./data/todo-db')

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
    res.redirect('/todos');
});

app.get('/home', function(req, res) {
    // Never begin the name of the template 
    // with a forward slash
    res.render('home');
});

app.get('/todos', function(req, res){
const todos = todoDb.getAll();
res.render('todos/index', {
    todos});
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});
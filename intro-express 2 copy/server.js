// Load express
const express = require('express');
const path = require('path');

// require the Todo "database"
const todoDb = require('./data/todo-db');

// Create express application
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Mount Middleware (app.use)

// Mount routes

// Define a "root" route directly on app
// Next lesson we'll use better practice routing
app.get('/', function(req, res) {
    // This path MUST start with a leading slash
    res.redirect('/todos');
});

app.get('/home', function(req, res){
// Never begin the name of the template with a /
    res.render('home');
}); 

app.get('/todos', function(req, res) {
    const todos = todoDb.getAll();
        res.render('todos/index', { todos });
    });


app.listen(3000, function() {
  console.log('Listening on port 3000')  
});
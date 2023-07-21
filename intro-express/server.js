//  Load express
const express = require('express');
const path = require('path');

// require the To Do "database"
const todoDb = require('./data/todo-db');

// Create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)


// Mount routes

// Define a "root" route directly on app
// Next lesson we'll use better practice routing
app.get('/', function(request, response) {
    // this Path MUST start with a leading slash
    response.redirect('/todos'); 
});

app.listen(3000, function() {
    console.log('Listeing on port 3000');
});

app.get('/home', function(req, res) {
    // Never being the name of a template with a forward slash
    res.render('home');
});

app.get('/todos',function(req, res) {
    const todos = todoDb.getAll();
    res.render('todos/index', { todos });
});
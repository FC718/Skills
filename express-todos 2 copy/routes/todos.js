var express = require('express');
var router = express.Router();
var todosCtrl =require('../controllers/todos');

/* GET users listing. */
// ALL actual paths start with "/todos"

// Get /todos
router.get('/', todosCtrl.index);
// GET /todos/:id
router.get('/:id', todosCtrl.show);

module.exports = router;

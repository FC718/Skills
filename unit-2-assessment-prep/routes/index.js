var express = require('express');
var router = express.Router();
const groceries = require('../data/groceries');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { groceries });
});

// POST /groceries
router.post('/groceries', function(req, res) {
  req.body.need = true;
  groceries.push(req.body);
  res.redirect('/');
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
// LOCAL HOST 3000/
router.get('/', function(req, res, next) {
  // res render means to compile/ maake 
  res.render('index', { title: 'Express To-Do' });
});

module.exports = router;

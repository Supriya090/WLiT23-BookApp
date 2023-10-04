var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book App' });
});

router.get('/newRoute', function(req, res, next){
  res.render('index', {title:'New Route'})
})

module.exports = router;

var express = require('express');
var books = require('../resources/books');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book App', bookList: books});
});

module.exports = router;

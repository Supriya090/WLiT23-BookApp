const { Router } = require('express');
var express = require('express');
var router = express.Router();

router.get('/add', function(req, res, next){
    res.render('addBooks', {
        title: 'Add book',
    });
})

module.exports = router;
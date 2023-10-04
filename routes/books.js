const { Router } = require('express');
var express = require('express');
var books = require('../resources/books');
var router = express.Router();

router.get('/add', function(req, res, next){
    res.render('addBooks', {
        title: 'Add book',
    });
})

router.post('/save', function(req, res){
    books.push({...req.body, _id: `00${books.length + 1}`});
    res.redirect('/');
  })
  
router.get('/remove/:_id', function(req,res){
books.splice(req.params._id, 1);
res.redirect('/');
})

router.get('/edit/:_id', function(req,res){
console.log(req.params._id);
const book = books.find((book)=>book._id === req.params._id);
res.render('editBooks',{
    title:"Edit Book",
    book
})
})

// Ask fellows to do this
router.post('/edit/:_id', function(req,res){
let currIndex = books.findIndex(book => book._id === req.params._id);
books.splice(currIndex, 1, {...req.body, _id: req.params._id});
res.redirect('/');
})

module.exports = router;
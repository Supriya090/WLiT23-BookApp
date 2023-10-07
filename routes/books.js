var express = require('express');
const Book = require('../models/book')
var router = express.Router();

router.get('/add', function (req, res, next) {
  res.render('addBooks', {
    title: 'Add book',
  });
})

router.post('/save', async function (req, res) {
  await Book.insertMany([req.body])
  res.redirect('/');
})

router.get('/remove/:_id', async function (req, res) {
  console.log(req.params._id);
  await Book.findOneAndRemove({ _id: req.params._id })
  const books = await Book.find()
  res.render('index', { title: 'Book App', bookList: books, redirectUrl: '/' });
})

router.get('/edit/:_id', async function (req, res) {
  console.log(req.params._id);
  const book = await Book.findOne({ _id: req.params._id });
  res.render('editBooks', {
    title: "Edit Book",
    book
  })
})

// Ask fellows to do this
router.post('/edit/:_id', async function (req, res) {
  await Book.findOneAndUpdate({ _id: req.params._id }, { ...req.body })
  res.redirect('/');
})


module.exports = router;

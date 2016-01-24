var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Table = require('../models/Todo.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Table.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Table.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router;

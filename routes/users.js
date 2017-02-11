/*
File: users.js
Author: Omid Khataee
Website: Assignment 1 - Express JS Server
Description: 
*/

let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

'use strict';
const express = require('express');
const app = express();
 
// Exercise 1: /math/circle/:r
// Takes a radius as a URL parameter and responds with area and circumference
app.get('/math/circle/:r', function(req, res) {
  let r = parseFloat(req.params['r']);
  let area = Math.PI * r * r;
  let circumference = Math.PI * 2 * r;
  res.json({ area: area, circumference: circumference });
});
 
// Exercise 2: /hello/name
// Takes first and last as query parameters and responds with a greeting
app.get('/hello/name', function(req, res) {
  let hasFirst = req.query['first'];
  let hasLast = req.query['last'];
 
  if (!hasFirst && !hasLast) {
    res.type('text').status(400).send('Missing Required GET parameters: first, last');
  } else if (!hasFirst) {
    res.type('text').status(400).send('Missing Required GET parameters: first');
  } else if (!hasLast) {
    res.type('text').status(400).send('Missing Required GET parameters: last');
  } else {
    res.type('text').send('Hello ' + hasFirst + ' ' + hasLast);
  }
});
 
const PORT = process.env.PORT || 8000;
app.listen(PORT);

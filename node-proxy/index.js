
var express = require('express');
var request = require('superagent')

var app = express();
var HOST = 'http://10.12.1.44:8080/api/'

/**
 * CORS support.
 */

app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.get('v5/adv/homePageByBranchId', function (req, res) {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

app.get('v5/adv/homeBannerByBranchId', function (req, res) {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

app.get('v5/adv/homePageByBranchId', function (req, res) {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})



app.listen(8080, function () {
  console.log('HTTP Server is running in http://10.12.1.44:8080')
})

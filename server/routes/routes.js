var express = require('express');
var router = express.Router();
var sha256 = require('sha256');
var randomstring = require("randomstring");
var rp = require('request-promise');

router.get('/purchase', function (req, res, next) {
  res.send('Do not use GET, use POST method');
});

router.post('/purchase', function (req, res, next) {

  var authKey = generateAuthKey();

  var options = {
    method: 'POST',
    uri: 'https://sandbox.usaepay.com/api/v2/transactions',
    headers: {
      'Authorization': 'Basic ' + authKey
    },
    body: req.body,
    json: true
  };

  rp(options)
    .then(function (data) {
      console.log('data back from api', data);
      res.send(data);
    })
    .catch(function (err) {
      console.error('Error',err)
      throw err;
    });

});

function generateAuthKey(){
  var seed = randomstring.generate();
  var apikey = "_8Vf2UHF3ciH2nqd016Ig8xCbNCkABlC"
  var apipin = "1234"
  var prehash = apikey + seed + apipin;
  var apihash = 's2/' + seed + '/' + sha256(prehash);
  var authKey = new Buffer(apikey + ":" + apihash).toString('base64')
  console.log("Authorization: Basic " + authKey);
  return authKey;
}

module.exports = router;
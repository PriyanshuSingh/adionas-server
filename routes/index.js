const express = require('express');
const router = express.Router();
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCZ53L-zz622IxKtuBn-qB_ltkdGXBnVL8',
    Promise: Promise
});

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    console.log(req);
    let data = {
        hello: 'shit'
    };
    // console.log(req);
    res.json(data);
});

router.post('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    console.log(req.body);
    googleMapsClient.placesNearby({
        location: [req.param('lat'), req.param('long')],
        language: 'en',
        radius: 5000,
        opennow: true,
    }).asPromise().then(function (result) {
        "use strict";
        if(result && result.json && result.json.results) {
            console.log(result.json.results);
            console.log(result.json.results.length);
        }
    });
    let data = {
        hello: 'shit'
    };
    // console.log(req);
    res.json(data);
});
module.exports = router;

const express = require('express');
const router = express.Router();
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCZ53L-zz622IxKtuBn-qB_ltkdGXBnVL8',
    Promise: Promise
});
const ZomatoApiHandler = require('../ZomatoApiHandler');
let zom = new ZomatoApiHandler();
const LIMIT_RES = 3;
router.post('/', function(req, res, next) {
    var uLat = req.param("ulat");
    var uLong = req.param("ulong");
    console.log(uLat + "LOCATION ");
    console.log(uLong + "LOCATION ");
    let resData = [];
    // res.render('index', { title: 'Express' });
    let zomPromise = zom.nearbyRest({ulong: uLong, ulat: uLat})
        .then(function(restaurants) {
            "use strict";
            let arr = [],
                location = [28.605015,77.035237];

            restaurants.forEach(function (res) {
                res = res.restaurant;
                if(resData.length >= LIMIT_RES) return;
                resData.push(res);
                arr.push([res.location.latitude, res.location.longitude]);
            });
            googleMapsClient.directions({
                origin: [uLat, uLong],
                destination: [uLat, uLong],
                waypoints: arr
            }).asPromise().then(function (result) {
                result.json = result.json || {};
                result.json.resData = resData;
                res.json(result.json);
                console.log(result.json)
            });
        });
});

router.post('/a', function (req, res, next) {

    // res.render('index', { title: 'Express' });
    // console.log(req.body);
    // googleMapsClient.placesNearby({
    //     location: [req.param('lat'), req.param('long')],
    //     language: 'en',
    //     radius: 5000,
    //     opennow: true,
    // }).asPromise().then(function (result) {
    //     "use strict";
    //     if(result && result.json && result.json.results) {
    //         res.json(result.json.results);
    //     }
    // }).catch(next);
});

module.exports = router;

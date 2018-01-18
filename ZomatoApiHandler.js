/**
 * Created by WebStorm.
 * User: priyanshu.s
 * Date: 13/01/18
 * Time: 5:14 PM
 */

const ApiHandler = require('./ApiHandler');
const requestPromise = require('request-promise');
const Const = require('./Constant');

class ZomatoApiHandler extends ApiHandler {
    constructor() {
        super();
    }
    nearbyRest(location) {
        location = location || {};
        location.ulong= location.ulong || -74.004821;
        location.ulat = location.ulat || 40.742051;
        return requestPromise({
            uri: Const.ZOMATO.BASE_URL + Const.ZOMATO.APIS.GEOCODE + "?&lat=" + location.ulat + "&lon=" + location.ulong,
            headers: {
                "user-key" : Const.ZOMATO.KEY
            },
            json: true
        }).then(function (repos) {
            return repos.nearby_restaurants;
        });
    }
}

module.exports = ZomatoApiHandler;
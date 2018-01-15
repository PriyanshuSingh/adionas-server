/**
 * Created by WebStorm.
 * User: priyanshu.s
 * Date: 13/01/18
 * Time: 2:53 PM
 */

let ZOMATO = {
    BASE_URL : "https://developers.zomato.com/api/v2.1",
    APIS : {
        CATEGORIES : "/categories",
        CITIES: "/cities",
        COLLECTION: "/collections",
        CUISINES: "/cuisines",
        ESTABLISHMENTS: "/eshtablishments",
        GEOCODE: "/geocode",
        LOCATION_DETAILS: "/location_details",
        LOCATIONS: "/locations",
        DAILYMENU: "/dailymenu",
        RESTAURANTS: "/restaurants",
        REVIEWS: "/reviews",
        SEARCH: "/search"
    },
    KEY: "c3385955b9691be8d99ef53711ca4025"
};
let GOOGLE_MAPS = {
    BASE_URL: "",
    KEY: "AIzaSyCZ53L-zz622IxKtuBn-qB_ltkdGXBnVL8"
};

class Constant{
    constructor() {

    }
}

Constant.ZOMATO = ZOMATO;
Constant.GOOGLE_MAPS = GOOGLE_MAPS;

module.exports = Constant;
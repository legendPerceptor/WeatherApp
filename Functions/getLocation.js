const config = require('../Config/config');
const request = require('request');
//https://maps.googleapis.com/maps/api/geocode/json?address=0000&key=AIzaSyCNmoP4roWnUCuVY8PMEGJ_1VprLzSMkTw
let getLocation = (uri_address, callback) => {
    
    const aQueryUrl =
        `https://maps.googleapis.com/maps/api/geocode/json?address=${uri_address}&key=${config.Googlekey}`;
    request({
        url: aQueryUrl,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.error("Cannot have have access to Google Server!");
            process.exit(1);
        }
        let result = {};
        if (body.status == 'OK') {
            result.address = body.results[0].formatted_address;
            result.longitude = body.results[0].geometry.location.lng;
            result.latitude = body.results[0].geometry.location.lat;
            callback(null, result);
        }

    });
};

module.exports=getLocation;
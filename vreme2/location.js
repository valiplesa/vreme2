
/**
*@ap {get} 
*ip->location service
*/
var url = 'http://ipinfo.io';
var request = require('request');

/** 
*@api {get} 
* get location
*/
module.exports = function() {
    return new Promise( function(resolve, reject) {
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (error || !body) {
                reject('Failed to fetch the location.');
            }

/** 
*@apiParam  
* location result
*/
            resolve(body.city);
        });
    });
};
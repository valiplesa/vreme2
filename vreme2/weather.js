var request = require('request');

/**
*@apiParam 
* export location 
*/

module.exports = function (location) {
    return new Promise( function(resolve, reject) {
        location = encodeURIComponent(location);

        if(!location) {
            reject('No location provided!');
        }

/** 
*@apiParam 
* prepare url for request data
*/
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=9f5591642de24450d29d53a756c5e985';

/**
*@api {get} 
* request data
*/
        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if(error) {
                reject('Failed to fetch the weather!');
            }
/** 
*@apiParam 
* prepare result string
*/
            resolve('It\'s ' + body.main.temp + ' degrees Celsius in ' + body.name + '!');
        });
    });
};
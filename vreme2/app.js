/**
*@api {get} load module for weather
*/
var weather = require('./weather.js');

/**
*@api {get} 
* load module for location
*/
var location = require('./location.js');

/** 
*@api {get} 
* load yargs module. Enables to specify a location
*/
var argv = require('yargs')
    .options({
        location: {
            demand: false,
            alias: 'l',
            type: 'string',
            description: 'Enables you to specify a location.'
        }
    })
    .help('help')
    .argv;

/** 
*@api {get} 
*get weather. write to console for test
*/
if(argv.location) {
    weather(argv.location).then( function(message) {
        console.log(message);
    }).catch( function(error) {
        console.log(error);
    });
} else {
    location().then( function (location) {
        return weather(location);
    }).then( function(output) {
        console.log(output);
    }).catch ( function(error) {
        console.log(error);
    });
}


/** 
*@apiParam  
* http module
*/
var http = require('http');

/**
*@api 
* create http server
*/
var server = http.createServer (function (request, response)
{

/** 
 * @api {get} 
*get weather info to write on http page
*/
if(argv.location) {
    weather(argv.location).then( function(message) {
        console.log(message);
    }).catch( function(error) {
        console.log(error);
    });
} else {
    location().then( function (location) {
        return weather(location);
    }).then( function(output) {
        console.log(output);
        //send response to http server
        response.write(output);
        response.end();
        
    }).catch ( function(error) {
        console.log(error);
    });
}

});

server.listen (process.env.PORT);
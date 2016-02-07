var weather = require('./weather.js');
var location = require('./location.js');
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
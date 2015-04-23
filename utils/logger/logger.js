/*
    File to define how this app works with logs:
*/    

var properties = require('properties').properties;   //Import properties file, and choose properties object
var winston = require('winston');                       //Import winston log library {https://github.com/winstonjs/winston}
    winston.emitErrs = true;                            //

/*
    personal winston configuration created to define 4 different logs:
        -info
        -warning
        -error
        -console debug
*/    
var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            name: 'info-file',
            level: 'info',
            filename: properties.log.info,      //<-- defined since properties file.
            handleExceptions: true,
            json: true,
            maxsize: 3145728, 
            maxFiles: 3,
            colorize: false
        }),
        //Warning debug option:
        new winston.transports.File({
            name: 'warning-file',
            level: 'warn',
            filename: properties.log.warn,   //<-- defined since properties file.   
            handleExceptions: true,
            json: true,
            maxsize: 3145728,
            maxFiles: 3,
            colorize: false
        }),
        //error debug option:
        new winston.transports.File({
            name: 'error-file',
            level: 'error',
            filename: properties.log.error,     //<-- defined since properties file.
            handleExceptions: true,
            json: true,
            maxsize: 3145728,
            maxFiles: 3,
            colorize: false
        }),
        //console debug option: 
        new winston.transports.Console({
            name:'debug',
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false                          //Keep ussing winston if it launch an exception
});
exports.logger = logger;

//Unsused yet.
/*
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
*/

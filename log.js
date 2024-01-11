var fs = require('fs');
var util = require('util');
var logFile = fs.createWriteStream('./logs.log', {flags: 'a'});
var logStdout = process.stdout; 

log = function(d){
    var currentdate = new Date();
    logFile.write(currentdate + ': ' + util.format(d) + ';\n');
    logStdout.write(currentdate + ': ' + util.format(d) + ';\n');
}

module.exports = log
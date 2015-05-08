var Download = require('download');
var progress = require('download-status');
var fs       = require('fs');
var os       = require('os');
var path     = require('path');
var boost    = require('./boost.js');

function isDarwin() {
    return os.platform() == 'darwin';
}

function isWindows() {
    return os.platform() == 'win32';
}

function isUnix() {
    return os.platform() == 'linux';
}

function is64bit() {
    return os.arch() == 'x64';
}

var cdn = 'http://static.computer-vision-talks.com/dist/boost/';

var boostArchive = '';

if (isWindows()) {
    if (is64bit()) {
        boostArchive = cdn + 'boost-1.56-vc12-x64.zip';
    }
    else {
        boostArchive = cdn + 'boost-1.56-vc12-x86.zip';        
    }
}
else if (isDarwin()) {
    boostArchive = cdn + 'boost-1.56-darwin.zip';
}
else if (isUnix()) {
    boostArchive = cdn + 'boost-1.56-unix.zip';
} 
else {
    throw 'Your platform ' + os.platform() + '/' + os.type() + ' is not supported. Sorry.';
}

var boostPath = path.resolve(__dirname, 'boost');
console.log('boost will be downloaded to ', boostPath);

function runInboostDoesNotExists(cb) {
    fs.mkdir(boostPath, 0777, function(err) {
        if (err)
            console.log("boost directory already exists. Skipping download.");
        else 
            cb(); // successfully created folder
    });    
}

runInboostDoesNotExists(function() {
    console.log('Loading boost from ', boostArchive);

    var download = new Download({ extract: true, strip: true })
        .get(boostArchive)
        .dest(path.resolve(__dirname, 'boost'))
        .use(progress());

    download.run(function (err, files, stream) {
        if (err) {
            console.log('Caught error during unzip:', err);
            throw err;
        }

        console.log('File downloaded successfully!');
    });
});

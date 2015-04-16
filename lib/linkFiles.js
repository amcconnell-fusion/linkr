var fs = require('fs');
var spawn = require('child_process').spawn;

module.exports = linkFiles;
function linkFiles() {
    readPackageJson(function (error, links) {
        if (error) {
            return console.error(error);
        } else {
            linkNext(links);
        }
    });
}

function linkNext(links) {
    var nextLink = links.shift();
    if (nextLink) {
        process.stdout.write('linkr: linking to ' + nextLink + '...');
        var npm = spawn('npm', ['link', nextLink]);
        npm.on('close', function () {
            process.stdout.write(' Done.\n');
            linkNext(links);
        });
    } else {
        process.exit(0);
    }
}

function readPackageJson(callback) {
    fs.readFile('./package.json', { encoding: 'utf8' }, function (error, data) {
        if (error) {
            return callback(error);
        } else {
            var pkg = JSON.parse(data);
            var links = (pkg.config && pkg.config.links) || [];
            return callback(null, links);
        }
    });
}

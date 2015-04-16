var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;

module.exports = removeSymbolicLinks;
function removeSymbolicLinks() {
    fs.readdir('./node_modules', function (error, contents) {
        if (error) {
            if (error.code === 'ENOENT' && error.path === './node_modules') {
                console.log('linkr: no node_modules folder found');
                process.exit(0);
            } else {
                return console.error(error);
            }
        }
        return removeNextDirectory(contents);
    });
}

function removeNextDirectory(contents) {
    var nextDir = contents.shift();
    if (nextDir) {
        var dir = path.join('./node_modules', nextDir);
        fs.lstat(dir, function (error, stats) {
            if (stats.isSymbolicLink()) {
                var rm = spawn('rm', ['-Rf', dir]);
                process.stdout.write('linkr: removing linked directory ' + dir + '...');
                rm.on('close', function() {
                    process.stdout.write(' Done.\n');
                    removeNextDirectory(contents);
                });
            }
        });
    } else {
        process.exit(0);
    }
}

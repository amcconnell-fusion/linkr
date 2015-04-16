var pkg = require('../package.json');

module.exports = displayVersion;
function displayVersion() {
    process.stdout.write('Version ' + pkg.version + '\n');
}

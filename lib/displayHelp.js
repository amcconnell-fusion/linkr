var pkg = require('../package.json');

module.exports = displayHelp;
function displayHelp() {
    var helpText = '';
    helpText += '\n';
    helpText += 'linkr: ' + pkg.description + '\n';
    helpText += 'version: ' + pkg.version + '\n';
    helpText += '\n';
    helpText += 'Usage: linkr <command>\n';
    helpText += '\n';
    helpText += 'where <command> is one of:\n';
    helpText += '    help, link, remove, version\n';
    helpText += '\n';
    helpText += 'linkr help     Displays this help text.\n';
    helpText += 'linkr link     Run all prescribed npm links (default).\n';
    helpText += 'linkr remove   Remove all symbolic links from the node_modules folder.\n';
    helpText += 'linkr version  Display the current version.\n';
    helpText += '\n';
    process.stdout.write(helpText);
}

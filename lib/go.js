var displayHelp = require('./displayHelp');
var displayVersion = require('./displayVersion');
var linkFiles = require('./linkFiles');
var removeSymbolicLinks = require('./removeSymbolicLinks');

module.exports = go;
function go(runMode) {
    switch (runMode) {
        case 'help_mode':
            displayHelp();
            break;
        case 'link_mode':
            linkFiles();
            break;
        case 'remove_mode':
            removeSymbolicLinks();
            break;
        case 'version_mode':
            displayVersion();
            break;
        default:
            throw new Error('linkr: unrecognized run mode "' + runMode + '"');
            break;
    }
}

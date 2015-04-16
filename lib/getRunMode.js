module.exports = getRunMode;
function getRunMode(processArgs) {
    var indexOfLinkr = getIndexOfScript(processArgs);
    var command = processArgs[indexOfLinkr + 1];
    if (command === 'help') {
        return 'help_mode';
    }
    if (command === 'version') {
        return 'version_mode';
    }
    if (command === 'remove') {
        return 'remove_mode';
    }
    if (command === 'link' || command === undefined) {
        return 'link_mode';
    }
    throw new Error('linkr: unrecognized command "' + command + '"');
}

function getIndexOfScript(processArgs) {
    for (var i = 0; i < processArgs.length; i += 1) {
        if (/linkr/.test(processArgs[i])) {
            return i;
        }
    }
    return -1;
}

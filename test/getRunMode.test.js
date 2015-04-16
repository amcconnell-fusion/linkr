var getRunMode = require('../lib/getRunMode');
var expect = require('chai').expect;

describe('getRunMode', function () {

    it('returns help_mode', function () {
        var mode = getRunMode(['linkr', 'help']);
        expect(mode).to.equal('help_mode');
    });

    it('returns link_mode', function () {
        var mode = getRunMode(['linkr', 'link']);
        expect(mode).to.equal('link_mode');
    });

    it('returns link_mode when no command is given', function () {
        var mode = getRunMode(['linkr']);
        expect(mode).to.equal('link_mode');
    });

    it('returns remove_mode', function () {
        var mode = getRunMode(['linkr', 'remove']);
        expect(mode).to.equal('remove_mode');
    });

    it('returns version_mode', function () {
        var mode = getRunMode(['linkr', 'version']);
        expect(mode).to.equal('version_mode');
    });

});

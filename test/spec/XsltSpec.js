//var should = require('should');

var XSLT = require('../../index.js');

describe('XSLT', function() {

    var xslt;
    var testUrl = 'http://localhost:8080/xml';
    var testXml = '<xml><test>dummy</test></xml>';
//    var testXml = $('<xml><test>dummy</test></xml>');

    beforeEach(function() {
        xslt = new XSLT();
    });

    it('should add XML to the cache correctly', function() {
        xslt.addXml(testUrl, testXml);
        expect(xslt.xmls.size()).toEqual(1);
    });

    it('should not add the same XML to the cache more than once', function() {
        xslt.addXml(testUrl, testXml);
        expect(xslt.xmls.size()).toEqual(1);
        xslt.addXml(testUrl, testXml);
        expect(xslt.xmls.size()).toEqual(1);
    });

    it('should remove XML from the cache correctly', function() {
        xslt.addXml(testUrl, testXml);
        expect(xslt.xmls.size()).toEqual(1);
        xslt.removeXml(testUrl);
        expect(xslt.xmls.size()).toEqual(0);
    });

    it('should remove not remove any XML from the cache when the URL is incorrect', function() {
        xslt.addXml(testUrl, testXml);
        expect(xslt.xmls.size()).toEqual(1);
        xslt.removeXml('http://localhost:8080/invalid');
        expect(xslt.xmls.size()).toEqual(1);
    });

});

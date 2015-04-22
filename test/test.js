var assert = require('assert');
var sinon = require('sinon');
var parser = require('../');
var fixture1 = require('./fixture1');

describe('First', function() {
  it('should work', function() {
    var fakeRequest = function(url, cb) {
      cb(null , null, fixture1);
    };
    var cb = sinon.stub(parser, '_getRequest').returns(fakeRequest);
    parser.getGold(function(result) {
      assert.strictEqual(result.usd.pm, null);
    });
  });
});

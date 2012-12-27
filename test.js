var assert = require('assert'),
    base64 = require('./');

(function() {
  var encoded = base64.encode('foo1234');
  assert.equal(encoded, 'Zm9vMTIzNA', 'should encode the expected string');

  var decoded = base64.decode(encoded);
  assert.equal(decoded, 'foo1234', 'should decode the expected string');

}).call(null);                                              

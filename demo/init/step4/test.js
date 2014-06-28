var helloWorld = require('./index.js'),
  assert = require('assert');

describe('hello-world', function() {
  beforeEach(function() {
  });

  it('should be ready for some hacking', function() {
    assert.equal(typeof helloWorld, 'function');
  });
});

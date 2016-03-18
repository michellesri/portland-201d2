var assert = require('assert');
var app = require('../js/app.js');

describe('my first test', function() {
  it('should check first question', function() {
    assert.deepEqual(app.getQuestion(0), 'first');
  });

  it('should check third question', function() {
    assert.deepEqual(app.getQuestion(2), 'third');
  });

  it('Should increment 0 to get 5', function() {
    assert.equal(app.addFive(0), 5);
  });

  it('Should increment 4 to get 9', function() {
    assert.equal(app.addFive(4), 9);
  });

  it('Should increment -1008 to get -1003', function() {
    assert.equal(app.addFive(-1008), -1003);
  });
});

var assert = require('assert');
var app = require('../js/app.js');

describe('My first test', function() {
  it('should check first question', function() {
    assert.deepEqual(app.getQuestion(0), 'first');
  });

  it('should check third question', function() {
    assert.deepEqual(app.getQuestion(2), 'third');
  });

  it('should increment 0 to get 5', function() { assert(5 == app.addFive(0)); });
  it('should increment 4 to get 9', function() { assert(9 == app.addFive(4)); });
  it('should increment -1008 to get -1003', function() { assert(app.addFive(-1008) == -1003); });
});

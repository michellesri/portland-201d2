var assert = require('assert');
var app = require('../scripts/app.js');

describe('Is Gulp On?', function() {
  it('Shows that gulp is running', function() {
    assert.deepEqual(app.getQuestion(0), 'helloWorld');
  });

});

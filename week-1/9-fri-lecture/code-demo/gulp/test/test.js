var assert = require('assert');
var app = require('../js/app');

describe('my first test', function() {
    it('should check first question', function() {
        assert.deepEqual(app.getQuestion(0), "first")
    });

    it('should check third question', function() {
        assert.deepEqual(app.getQuestion(2), "third")
    });

});

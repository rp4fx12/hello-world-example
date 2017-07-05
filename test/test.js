const functions = require('../basic-functions');
const expect = require('chai').expect;

describe('test helloName function', function () {
  it('should return Hello Alex', function() {
    expect('Hello Alex').to.equal(functions.helloName('Alex'));
  })
})

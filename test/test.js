const functions = require('../basic-functions');
const expect = require('chai').expect;

describe('Basic Func', function() {
  it('return Hello Rohan', function() {
    expect('Hello Rohan').to.equal(functions.helloName('Rohan'));
  })
  it('return Hello null', function() {
    expect('Hello null').to.equal(functions.helloName(null));
  })
})

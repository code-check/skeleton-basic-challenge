var 
  assert = require("chai").assert,
  challenge = require("../app/challenge.js");

//Add prerequisites if any

describe("Challenge", function() {

  it("dummy test1 - 1 is equal to 1", function() {
    assert.equal(challenge(1), 1);
  });

  it("dummy test2 - 2 is equal to 2", function() {
    assert.equal(challenge(2), 2);
  });
});
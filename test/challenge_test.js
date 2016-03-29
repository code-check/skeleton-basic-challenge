var assert = require("chai").assert;
var codecheck = require("codecheck");

function doTest(arg, expected, done) {
  var app = codecheck.consoleApp("./a.out");
  app.expected("" + 1);
  app.runAndVerify([arg], function(result) {
    assert(result.succeed, result.getMessage());
    done();
  });
} 

describe("challenge", function() {

  it("dummy test1 - 1 is equal to 1", function(done) {
    doTest( 1, 1, done);
  });
});
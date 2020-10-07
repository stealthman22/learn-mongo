const { it } = require("mocha");
const assert = require("assert");

//  describe a test
describe("some demo tests", function () {
	// create test
	//  tests are housed in it blocks

	it("adds two numbers", function () {
		assert(2 + 3 === 5);
	});
});

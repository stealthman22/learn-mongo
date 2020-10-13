const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe tests

//  Connection should be fully made before tests start to run
//  use a hook to do this
//  hooks are used to tell mocaha to run a func before or after running  a test

describe("Saving records", function () {
	// done checks if test is complete
	//  done is from mocha
	// it means individual test
	it("Saves a record to the db", function (done) {
		let char = new MarioChar({
			name: "Mario",
		});
		//   how mongoose allows us save record direclty to db
		// save is async from mongoos
		char.save().then(function () {
			// isnew property
			// true if record has been added  locally but not yet in db
			// false when its been saved to the db
			assert(char.isNew === false);
			done();
		});
	});
	// next test
});
// mocha uses done to know when a func has

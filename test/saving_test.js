const mocha = require("mocha");
const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("saving records", function () {
	// done checks if test is complete
	//  done is from mocha
	it("Saves a record to the db", function (done) {
		var char = new MarioChar({
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

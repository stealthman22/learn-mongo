const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("deleting records", function () {
	let char;
	beforeEach(function (done) {
		char = new MarioChar({
			name: "Mario",
		});
		char.save().then(function () {
			done();
		});
	});

	it("deletes one record from the db", function (done) {
		MarioChar.findOneAndRemove({ name: "Mario" }).then(function () {
			MarioChar.findOne({ name: "Mario" }).then(function (result) {
				assert(result === null);
				done();
			});
		});
	});
});

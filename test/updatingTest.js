const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("updating records", function () {
	beforeEach(function (done) {
		char = new MarioChar({
			name: "Mario",
		});
		char.save().then(function () {
			done();
		});
	});

	it("update one record in the db", function (done) {
		MarioChar.findOneAndUpdate(
			{ name: "Mario" },
			{ name: "Joel" }
		).then(function () {
			MarioChar.findOne({ _id: char._id }).then(function (result) {
				assert(result._id.toString() === result._id.toString());
				done();
			});
		});
	});
});

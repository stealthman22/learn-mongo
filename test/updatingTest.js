const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe("updating records", function () {
	beforeEach(function (done) {
		char = new MarioChar({
			name: "Mario",
			weight: 50,
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

	it("increments the weights in the db by 1", function (done) {
		MarioChar.updateMany({}, { $inc: { weight: 2 } }).then(function () {
			MarioChar.findOne({ name: "Mario" }).then(function (result) {
				assert(result.weight === result.weight++);
				done();
			});
		});
	});
});

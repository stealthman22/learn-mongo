const assert = require("assert");
const MarioChar = require("../models/mariochar");

// // Describe test
// describe('Finding records', function () {
//     it('save a record to the db', funtion(){
//         var char = new MarioChar({
//             name: 'Mario'
//         })
//         char.sa
//     })
// })

describe("finding records", function () {
	// initialize the vhar variable for global access
	let char;

	// run before each test
	beforeEach(function (done) {
		char = new MarioChar({
			name: "Mario",
		});

		char.save().then(function () {
			done();
		});
	});

	// Create tests
	it("finds one record by Id from the db", function (done) {
		MarioChar.findOne({ _id: char._id }).then(function (result) {
			// toString converts the object to string so it doesn't fail
			assert(result._id.toString() === char._id.toString());
			done();
		});
	});
});

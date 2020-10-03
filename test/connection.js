const mongoose = require("mongoose");

//  connect to mongodb
mongoose.connect(
	"mongodb://localhost/testaroo",
	{ useUnifiedTopology: true },
	{ useNewUrlParser: true }
);

// listen if connection is open and run function
// this happens as a once event
mongoose.connection
	.once("open", function () {
		console.log("Connection has been established...");
	})
	.on("error", function (error) {
		console.log("Connection error".error);
	});
//  on happens evertime, hence callback is fired on every error

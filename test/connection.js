lesson-1
const mongoose = require("mongoose");

// Es6 promises
mongoose.Promise = global.Promise;

//  Connect to the db before test run using mocha hook
before(function (done) {
	//  connect to mongodb
	mongoose.connect("mongodb://localhost/testaroo", {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});

	// listen if connection is open and run function
	// this happens as a once event
	mongoose.connection
		.once("open", function () {
			console.log("Connection has been established...");
			done();
		})
		.on("error", function (error) {
			console.log("Connection error", error);
		});
});

//  on happens evertime, hence callback is fired on every error

// Drop  characters  collection before each test
// using the before each hook

beforeEach(function (done) {
	// drop the collection
	mongoose.connection.collections.mariochars.drop(function () {
		done();
	});

const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to db before tests run
before(function(done){

    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo');
    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });

});

// Drop the characters collection before each test
beforeEach(function(done){
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    }); master
});

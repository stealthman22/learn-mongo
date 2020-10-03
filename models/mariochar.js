const mongoose = require("mongoose");

//  require this cos we will use the schema property of object
const Schema = mongoose.Schema;

// create schema and model

const MarioCharSchema = new Schema({
	name: String,
	weight: Number,
});

// model
// create characters in the mariochar collection and base it on the schema
const MarioChar = mongoose.model("mariochar", MarioCharSchema);

module.exports = MarioChar;

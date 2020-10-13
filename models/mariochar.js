lesson-1
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
// mongodb will automatically pluralize this
const MarioChar = mongoose.model("mariochar", MarioCharSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);
master

module.exports = MarioChar;

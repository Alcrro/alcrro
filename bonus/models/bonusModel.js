
const { ObjectId, Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose)
const Schema = mongoose.Schema;


const peopleListSchema = new Schema({
	id: Number,

	marca: {
		type: String,
		required: true,
	},

	createdAt: {
		type:	Date,
		default: new Date,
	},

	nume: {

		type: String,
		required: true
	},
	prenume: {

	type: String,
	required: true
	},
	linia: {

	type: String,
	required: true
	},
	data: {
	type: String,
	required: false
	},
	bonus: {
	type: Number,
	required: true
	},
	
}

);
peopleListSchema.plugin(autoIncrement)
module.exports = mongoose.model('peopleList', peopleListSchema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tableHeaderSchema = new Schema({
	
	crt: {

		type: String,
		required: true
	},
	marca: {

		type: String,
		required: true
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
	required: true
	},
	bonus: {

	type: String,
	required: true
	},
	
});

module.exports = mongoose.model('tableHeader', tableHeaderSchema);

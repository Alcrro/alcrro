
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose)
const Schema = mongoose.Schema;


const monthsListSchema = new Schema({
	months: String,
	role:{
		default: 'January',
		type:String
		}
});


module.exports = mongoose.model('monthsList', monthsListSchema);

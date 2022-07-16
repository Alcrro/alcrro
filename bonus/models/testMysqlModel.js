const { INTEGER } = require('sequelize');

const pool = require('../util/MySqlConnection').pool
const Schema = pool.Schema;


const UsersSchema = new Schema({
	id: INTEGER,
	email: String,
	password: String,
})

module.exports = pool.model('Users', UsersSchema);
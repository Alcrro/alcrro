const mysql = require('mysql')


//MySql Connection

const pool =  mysql.createPool({
	host: process.env2.MYSQL_HOST,
	port: process.env2.MYSQL_PORT,
	user: process.env2.MYSQL_USER,
	password: process.env2.MYSQL_USER_PASSWORD,
	//password: '1S@msung.95.',
	database: process.env2.MYSQL_USER_DEFAULT_DATABASE
});

pool.getConnection((err, connection) => {
	if(err){
		throw err;
	}
	console.log('Conectare cu succes ,meree');
})

exports.pool = pool;
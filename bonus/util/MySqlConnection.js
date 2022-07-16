const mysql = require('mysql')


//MySql Connection

const pool =  mysql.createPool({
	host: 'hyperion.hosterion.net',
	port: "3306",
	user: 'alcrroro_guta',
	password: '1Samsung95',
	//password: '1S@msung.95.',
	database: 'alcrroro_ggga'
});

pool.getConnection((err, connection) => {
	if(err){
		throw err;
	}
	console.log('Conectare cu succes ,meree');
})

exports.pool = pool;
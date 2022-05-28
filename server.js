const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

const mongoConnect = require('./util/database').mongoConnect;

server.set('view engine', 'ejs');


const loginRoutes = require('./login/routes/loginRoutes');
const indexRoutes = require('./index/routes/indexRoute');

server.use(bodyParser.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, './public')))

const viewspath = path.join(__dirname,'./public_html/views');
server.set("views", viewspath);

server.use((req,res,next) => {
	// userInfo.findById(1)
	// .then(user => {
	// 	req.user = user;
	// 	next()
 	// })
	//  .catch(err => console.log(err));
	 next();
})

server.use(loginRoutes);
server.use(indexRoutes);


mongoConnect(() => {
  server.listen(3000);
});

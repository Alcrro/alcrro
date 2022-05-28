const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const mongoConnect = require('../util/database').mongoConnect;
const app = express();

app.set('view engine', 'ejs');


const indexRoutes = require('./routes/indexRoute');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './public')))

const viewspath = path.join(__dirname,'../public_html/views');
app.set("views", viewspath);

app.use((req,res,next) => {
	// userInfo.findById(1)
	// .then(user => {
	// 	req.user = user;
	// 	next()
 	// })
	//  .catch(err => console.log(err));
	 next();
})

app.use(indexRoutes);

mongoConnect(() => {
  app.listen(3000);
});
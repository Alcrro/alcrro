const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongoConnect = require('./util/database').mongoConnect;

app.set('view engine', 'ejs');

const loginRoutes = require('./routes/loginRoutes');

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

app.use(loginRoutes);

mongoConnect(() => {
  app.listen(3000);
});


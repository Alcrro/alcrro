const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');

const loginRoutes = require('./routes/loginRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './public')))

const viewspath = path.join(__dirname,'../public_html/views');
app.set("views", viewspath);


// app.use((req,res,next) => {
// 	// User.findById('627dbc1470acb15f825ae0b1')
// 	// .then(user => {
// 	// 	req.user = user;
// 	// 	next();
//  	// })
// 	//  .catch(err => console.log(err));
// 	next();
// })

app.use(loginRoutes);



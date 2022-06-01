const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();

app.set('view engine', 'ejs');

const MONGODB_URI = 'mongodb+srv://mycula:1Samsung95@cluster0.giv7z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const StoreSession = new MongoDBStore({
	uri: MONGODB_URI,
	collection: 'sessions'
});


const indexRoutes = require('./routes/indexRoute');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './public')));
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false, store: StoreSession}));

const viewspath = path.join(__dirname,'../public_html/views');
app.set("views", viewspath);

// app.use((req,res,next) => {
// 	// userInfo.findById(1)
// 	// .then(user => {
// 	// 	req.user = user;
// 	// 	next()
//  	// })
// 	//  .catch(err => console.log(err));
// 	 next();
// })

app.use(indexRoutes);

mongoose.connect(MONGODB_URI)
.then(result =>{
	server.listen(3000)
}).catch(err => {
	console.log(err);
})
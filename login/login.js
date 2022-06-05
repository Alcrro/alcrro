const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// const User = require('./models/user');
const User = require('../login/models/user');

app.set('view engine', 'ejs');

const MONGODB_URI = 'mongodb+srv://mycula:1Samsung95@cluster0.giv7z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const StoreSession = new MongoDBStore({
	uri: MONGODB_URI,
	collection: 'sessions'
});



const loginRoutes = require('../login/routes/loginRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../public')))
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: StoreSession,
  })
);

const viewspath = path.join(__dirname,'../public_html/views');
app.set("views", viewspath);


app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use(loginRoutes);

mongoose.connect(MONGODB_URI)
.then(result =>{
	app.listen(3000)
	console.log('Connected to Database')
}).catch(err => {
	console.log(err);
})



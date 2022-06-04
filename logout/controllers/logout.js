// const bcrypt = require('bcryptjs');
// const User = require('../models/user');

// exports.getSignup = (req, res, next) => {
// 	res.render('login/signup', {
// 		pageTitle: 'signup',
// 		path: '/signup',
// 		isAuthenticated: false
// 	});
// };
// exports.getLogin = (req, res, next) => {
// 	res.render('login/login', {
// 		pageTitle: 'Login',
// 		path: '/login',
// 		isAuthenticated: false
// 	});
// };

// exports.postLogin = (req, res, next) => {
// 	const email = req.body.email;
// 	const password = req.body.password;
// 	User.findOne({email: email})
// 	.then(user => {
// 		if(!user){
// 			return res.redirect('/login');
// 		}
// 		bcrypt.compare(password, user.password)
// 		.then(doMatch => {
// 			if(doMatch){
// 				req.session.isLoggedIn = true;
// 				req.session.user = user;
// 				return req.session.save(err => {
// 					console.log(err);
// 					res.redirect('/');
// 				})
// 			};
// 			res.redirect('/login')
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.redirect('/login')
// 		})

// 	})
// };

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

// exports.postSignup = (req,res,next) => {
// 	const authUserLoginEmail = req.body.email;
// 	const authUserLoginPassword = req.body.password;

// 	User.findOne({email: authUserLoginEmail})
// 	.then(userDoc => {
// 		if(userDoc){
// 			return res.redirect('/signup')
// 		}
// 		return bcrypt
// 		.hash(authUserLoginPassword, 12)
// 		.then(hashedPassword => {
// 			const user = new User({
// 				email: authUserLoginEmail,
// 				password: hashedPassword
// 			});
// 			return user.save();
// 		})
// 		.then(result => {
// 			res.redirect('/login');
// 		});
// 	})
// 	.catch(err =>{
// 		console.log(err);
// 	});
// }


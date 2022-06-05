const User = require('../models/user');

exports.postLogout = (req, res, next) => {
	const email = req.body.email;
	User.findOne({email: email})
	.then(user => {
			req.session.isLoggedIn = true;
			req.session.user = user;
			req.session.email = email;
			console.log(`User-ul cu email-ul: ${req.user.email} , s-a delogat de pe site`);
			return req.session.destroy(err => {
				res.redirect('/');
			});
		})
}
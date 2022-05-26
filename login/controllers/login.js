

exports.getLogin = (req,res,next) =>{

	res.render('login/login' , {

		pageTitle: 'test',

		path: '/login',

		formCSS:true,

		productCSS:true,

		activeAddProduct:true

	});

};


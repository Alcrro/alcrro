

exports.getFavorite = (req,res,next) =>{

	res.render('favorite/favorite' , {

		pageTitle: 'Favorite',

		path: '/favorite',

		formCSS:true,

		productCSS:true,

		activeAddProduct:true

	});

};


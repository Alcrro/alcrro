const Product = require('../models/product');
const indexProduct = require('../models/indexProduct');
// const PDFDocument = require('pdfkit')


exports.getIndex = async (req, res, next) => {
	// + - convert to number
	const page = +req.query.page || 1;
	const perPage = 10;
	let totalItems;
	try{
		const totalItems = await Product.find()
		.countDocuments()
		
		const product = await Product.find()
		.skip((page - 1) * perPage)
		.limit(perPage)

	
				res.render('index/index', {
					prods: product,
					pageTitle: 'Index',
					path: '/',
					currentPage: page,
					message: 'Fetched posts successfully',
					totalItems: totalItems,
					hasNextPage: perPage * page < totalItems,
					hasPreviousPage: page > 1,
					nextPage: page + 1,
					previousPage: page - 1,
					lastPage: Math.ceil(totalItems / perPage),
					isAuthenticated: req.session.isLoggedIn,
				});
				
		}
    catch(err) {
			if (!err.statusCode){
				err.statusCode =500
			}
		next(err);
	}
}


exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      res.render('products/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products',
        isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => console.log(err));
};

exports.getSortAsc = async(req, res, next) => {
	const currPage = +req.query.page || 1;
	const perPage = 10;
	let page = req.params.page;
	let totalItems;
	let SortAsc = "/sort-priceasc";
	try{
		const totalItems = await Product.find()
		.countDocuments()
		
		const product = await Product.find()
		.skip((page - 1) * perPage)
		.limit(perPage)
		.sort({price: 1})
		// res.send(product)
			// console.log(products);
      res.render('index/index', {
        prods: product,
        pageTitle: 'Index',
        path: "/sort-priceasc",
				currentPage: currPage,
				urlSortAsc: SortAsc,
				message: 'Fetched posts successfully',
				totalItems: totalItems,
				hasNextPage: perPage * currPage < totalItems,
				hasPreviousPage: currPage > 1,
				nextPage: currPage + 1,
				previousPage: currPage - 1,
				lastPage: Math.ceil(totalItems / perPage),
				isAuthenticated: req.session.isLoggedIn
      });
    }
    catch(err) {
			if (!err.statusCode){
				err.statusCode =500
			}
		next(err);
	}
};
 
exports.getSortDesc = async(req, res, next) => {
	const page = +req.query.page || 1;
	const perPage = 10;
	let totalItems;
	try{
		const totalItems = await Product.find()
		.countDocuments()
		
		const product = await Product.find()
		.skip((page - 1) * perPage)
		.limit(perPage)
		.sort({price: -1})
		// res.send(product)
			// console.log(products);
      res.render('index/index', {
        prods: product,
        pageTitle: 'Index',
        path: '/sort-pricedesc',
				editing: false,
				currentPage: page,
				message: 'Fetched posts successfully',
				totalItems: totalItems,
				hasNextPage: perPage * page < totalItems,
				hasPreviousPage: page > 1,
				nextPage: page + 1,
				previousPage: page - 1,
				lastPage: Math.ceil(totalItems / perPage),
				isAuthenticated: req.session.isLoggedIn
      });
    }
    catch(err) {
			if (!err.statusCode){
				err.statusCode =500
			}
		next(err);
	}
};

exports.getLimitOne = (req, res, next) => {
  Product.find().limit(1)
    .then(products => {
			// console.log(products);
      res.render('index/index', {
        prods: products,
        pageTitle: 'Index',
        path: '/',
				isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => {
      console.log(err);
    });
};
exports.getLimitTwo = (req, res, next) => {
	
  Product.find().limit(2)
    .then(products => {
			// console.log(products);
      res.render('index/index', {
        prods: products,
        pageTitle: 'Index',
        path: '/',
				isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => {
      console.log(err);
    });
};
exports.getLimitTree = (req, res, next) => {
  Product.find().limit(3)
    .then(products => {
			// console.log(products);
      res.render('index/index', {
        prods: products,
        pageTitle: 'Index',
        path: '/',
				isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => {
      console.log(err);
    });
};
exports.getLimitFour = (req, res, next) => {
  Product.find().limit(4)
    .then(products => {
			// console.log(products);
      res.render('index/index', {
        prods: products,
        pageTitle: 'Index',
        path: '/',
				isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getSortItems = (req,res, next) => {
	indexProduct.find()
	.then(sortItems => {
		res.render('content/headcontent', {
			sortItem: sortItems,
			path: "/",
			editing: false,
			isAuthenticated: req.session.isLoggedIn,
		})
	})
	.catch(err => {
		console.log(err);
	});
} 

exports.pagination = async (req,res,next) => {
	//+ - convert to number
	const currPage = +req.query.page || 1;
	const perPage = 10;
	let page = req.params.page;
	let totalItems;
	try{
		const totalItems = await Product.find()
		.countDocuments()
		
	const product = await Product.find()
	.skip((page - 1) * perPage)
	.limit(perPage)
		// res.send(product)
			res.render('index/index', {
				prods: product,
				pageTitle: 'Index',
				path: '/p:page',
				currentPage: currPage,
				message: 'Fetched posts successfully',
				totalItems: totalItems,
				hasNextPage: perPage * currPage < totalItems,
				hasPreviousPage: currPage > 1,
				nextPage: currPage+1,
				previousPage: currPage -1,
				lastPage: Math.ceil(totalItems / perPage),
				isAuthenticated: req.session.isLoggedIn

			});
			
	}
		catch(err) {
			if (!err.statusCode){
				err.statusCode =500
			}
		next(err);
		}
}

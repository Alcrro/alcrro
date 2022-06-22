const Product = require('../models/product');
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
		.limit(perPage);

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

exports.getSortAsc = (req, res, next) => {
	Product.find().sort({price: 1})
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
exports.getSortDesc = (req, res, next) => {
  Product.find().sort({price: -1})
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


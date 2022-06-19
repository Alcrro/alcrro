const Product = require('../models/product');
// const PDFDocument = require('pdfkit')

const ITEMS_PER_PAGE = 2;
const filter_item_per_page = 10

exports.getIndex = (req, res, next) => {

	// + - convert to number
	const page = +req.query.page || 1;
	let totalItems;
	Product.find()
	.countDocuments()
	.then(numProducts =>{
		totalItems = numProducts;
		return Product.find()
		.skip((page - 1) * ITEMS_PER_PAGE)
		.limit(ITEMS_PER_PAGE)
	})
	.then(products => {
			// console.log(products);
      res.render('index/index', {
        prods: products,
        pageTitle: 'Index',
        path: '/',
				currentPage: page,
				hasNextPage: ITEMS_PER_PAGE * page < totalItems,
				hasPreviousPage: page > 1,
				nextPage: page + 1,
				previousPage: page - 1,
				lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
				isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

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
	const page = +req.query.page || 1;
	let totalItems;
	Product.find()
	.countDocuments()
	.then(numProducts =>{
		totalItems = numProducts;
		return Product.find()
		.skip((page - 1) * ITEMS_PER_PAGE)
		.limit(ITEMS_PER_PAGE);
	})
    .then(products => {
			// console.log(products);
      res.render('index/index', {
        prods: products,
        pageTitle: 'Index',
				currentPage: page,
				nextPage: page + 1,
				previousPage: page - 1,
				lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
				hasNextPage: ITEMS_PER_PAGE * page < totalItems,
				hasPreviousPage: page > 1,
        path: '/',
				isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => {
      console.log(err);
    });
};
exports.getSortDesc = (req, res, next) => {
	const page = +req.query.page || 1;
	let totalItems;
	Product.find()
	.countDocuments()
	.then(numProducts =>{
		totalItems = numProducts;
		return Product.find()
		.skip((page - 1) * ITEMS_PER_PAGE)
		.sort({price: -1})
		.limit(ITEMS_PER_PAGE)
	})
  // Product.find().sort({price: -1})
	// .limit(ITEMS_PER_PAGE)
    .then(products => {
			// console.log(products);
      res.render('index/index', {
        prods: products,
        pageTitle: 'Index',
				currentPage: page,
				price: 1,
				nextPage: page + 1,
				previousPage: page - 1,
				lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
				hasNextPage: ITEMS_PER_PAGE * page < totalItems,
				hasPreviousPage: page > 1,
        path: '/',
				isAuthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getLimitOne = (req, res, next) => {
	const page = +req.query.page || 1;
	let totalItems;
	Product.find()
	.countDocuments()
	.then(numProducts =>{
		totalItems = numProducts;
		return Product.find()
		.skip((page - 1) * ITEMS_PER_PAGE)
		.sort({price: -1})
		.limit(ITEMS_PER_PAGE)
	})
  Product.find().limit(1)
    .then(products => {
			// console.log(products);
      res.render('index/index', {
        prods: products,
        pageTitle: 'Index',
				currentPage: page,
				nextPage: page + 1,
				previousPage: page - 1,
				lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE),
				hasNextPage: ITEMS_PER_PAGE * page < totalItems,
				hasPreviousPage: page > 1,
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


const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
  Product.find()
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


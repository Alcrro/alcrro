const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
  // Product.find()
  //   .then(products => {
			// console.log(products);
      res.render('products/add-product', {
        // prods: products,
        pageTitle: 'Products',
        path: '/add-product',
				isAuthenticated: req.session.isLoggedIn
      });
    // })
    // .catch(err => {
    //   console.log(err);
    // });
};
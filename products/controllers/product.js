const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
  Product.find()
    .then(products => {
			console.log(products);
      res.render('admin/add-product', {
        prods: products,
        pageTitle: 'Products',
        path: '/',
				isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// exports.getProduct = (req, res, next) => {
//   const prodId = req.params.productId;
//   Product.findById(prodId)
//     .then(product => {
//       res.render('products/product-detail', {
//         product: product,
//         pageTitle: product.title,
//         path: '/products',
//         isAuthenticated: req.session.isLoggedIn
//       });
//     })
//     .catch(err => console.log(err));
// };
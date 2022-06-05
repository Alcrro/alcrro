// const Product = require('../models/product');

// exports.postAddProduct = (req, res, next) => {
//   Product.find()
//     .then(products => {
// 			console.log(products);
//       res.render('admin/add-product', {
//         prods: products,
//         pageTitle: 'Products',
//         path: '',
// 				isAuthenticated: req.session.isLoggedIn,
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
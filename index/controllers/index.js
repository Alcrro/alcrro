const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('layouts/index', {
        prods: products,
        pageTitle: 'Index',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};


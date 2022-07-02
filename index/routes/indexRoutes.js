const express = require('express');



const router = express.Router();



const indexController = require('../controllers/index')



router.get('/', indexController.getIndex);
router.get('/sort-priceasc', indexController.getSortAsc);
router.get('/sort-pricedesc', indexController.getSortDesc);
router.get('/limit/2', indexController.getLimitTwo);
router.get('/limit/3', indexController.getLimitTree);
router.get('/limit/4', indexController.getLimitFour);
router.get('/products/:productId', indexController.getProduct);
// router.get('/p:p', indexController.pagination);
router.get('/p:page', indexController.pagination);
router.get('/sort-priceasc/p:page', indexController.pagination);
router.get('/sort-pricedesc/p:page', indexController.pagination);
// router.get('/page:page', indexController.pageRecord);





module.exports = router;
const express = require('express');



const router = express.Router();



const indexController = require('../controllers/index')



router.get('/', indexController.getIndex);
router.get('/sort-priceasc', indexController.getIndex);
router.get('/sort-pricedesc', indexController.getIndex);
router.get('/limit/2', indexController.getLimitTwo);
router.get('/limit/3', indexController.getLimitTree);
router.get('/limit/4', indexController.getLimitFour);
router.get('/products/:productId', indexController.getProduct);
// router.get('/:p=:p', indexController.getIndex);




module.exports = router;
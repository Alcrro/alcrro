const express = require('express');



const router = express.Router();



const indexController = require('../controllers/index')



router.get('/', indexController.getIndex);
router.get('/sort-price/asc', indexController.getSortAsc);
router.get('/sort-price/desc', indexController.getSortDesc);
router.get('/limit/1', indexController.getLimitOne);
router.get('/limit/2', indexController.getLimitTwo);
router.get('/limit/3', indexController.getLimitTree);
router.get('/limit/4', indexController.getLimitFour);
router.get('/products/:productId', indexController.getProduct);



module.exports = router;
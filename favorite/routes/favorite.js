const express = require('express');



const router = express.Router();



const favoriteController = require('../controllers/favorite')



router.get('/favorite', favoriteController.getFavorite);



module.exports = router;
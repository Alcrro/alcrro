const express = require('express');
const router = express.Router();


const bonusController = require('../controllers/bonusController')
const isAuth = require('../middleware/is-auth');

// router.get('/list', bonusController.peopleList);
router.get('/list',isAuth, bonusController.peopleList);
router.get('/add-person',isAuth, bonusController.addPerson);
router.post('/add-person',isAuth, bonusController.postPerson);
// router.get('/add-perslist',isAuth, bonusController.persList);
router.get('/add-perslist',isAuth, bonusController.getMarca);
router.get('/searchone',isAuth, bonusController.searchOne);
router.get('/searchtwo',isAuth, bonusController.searchtwo);






module.exports = router;
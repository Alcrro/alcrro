const express = require('express');

const router = express.Router();

const logoutController = require('../controllers/logout')

router.post('/logout', logoutController.postLogout);

module.exports = router;
const express = require('express');
const router = new express.Router();

router.use('/crud', require('./cruds'));
router.use('/users', require('./users'));
router.use('/images', require('./images'));

module.exports = router;

const express = require('express');
const router = new express.Router();
const Image = require('../models/image');

router.use('/', (req, res) => Image.upload(req.file, res.handle));

module.exports = router;

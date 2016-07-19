const express = require('express');
const router = new express.Router();
const Image = require('../models/image');
const multer = require('multer');
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { filesize: 1000000 * 10 },
});

router.use('/', upload.single('newFile'), (req, res) => Image.upload(req.file, res.handle));

module.exports = router;

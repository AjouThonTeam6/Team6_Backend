const express = require('express');
const router = express.Router();
const uploadRouter = require('./uploadRouter');

router.use('/upload', uploadRouter);

module.exports = router;

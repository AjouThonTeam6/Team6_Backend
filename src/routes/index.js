const express = require('express');
const router = express.Router();
const uploadRouter = require('./uploadRouter');
const emailRouter = require('./emailRouter');

router.use('/upload', uploadRouter);
router.use('/email', emailRouter);

module.exports = router;

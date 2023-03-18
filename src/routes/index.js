const express = require('express');
const router = express.Router();
const uploadRouter = require('./uploadRouter');
const emailRouter = require('./emailRouter');
const activityRouter = require('./activityRouter');

router.use('/upload', uploadRouter);
router.use('/email', emailRouter);
router.use('/activity', activityRouter);

module.exports = router;

const express = require('express');
const router = express.Router();
const { emailFile } = require('../service/emailService');
const multer = require('multer');
const path = require('path');
const uploader = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'upload/');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, 'file_' + Date.now() + ext);
    },
  }),
});

router.post('', uploader.single('file'), emailFile);

module.exports = router;

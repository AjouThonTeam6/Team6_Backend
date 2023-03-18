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

/**
 * @swagger
 * paths:
 *  /email:
 *   post:
 *     summary: Upload a CSV file
 *     description: Endpoint to upload a CSV file
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: '200'
 */

router.post('', uploader.single('file'), emailFile);

module.exports = router;

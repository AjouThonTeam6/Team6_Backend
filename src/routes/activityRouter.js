const express = require('express');
const router = express.Router();
const {
  activityService,
  uploadService,
} = require('../service/activityService');

/**
 * @swagger
 * paths:
 *  /activity:
 *   post:
 *     summary: Get contents for club activities
 *     description:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               topic:
 *                 type: string
 *               startdate:
 *                 type: string
 *               enddate:
 *                 type: string
 *               content:
 *                 type: string
 *               place:
 *                 type: string
 *               participants:
 *                 type: integer
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
 *  /activity/upload:
 *   post:
 *     summary: upload activities
 *     description:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               topic:
 *                 type: string
 *               content:
 *                 type: string

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
 * 
 * 
 */

router.post('', activityService);

router.post('/upload', uploadService);

module.exports = router;

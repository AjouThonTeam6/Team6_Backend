const express = require('express');
const router = express.Router();
const activityService = require('../service/activityService');

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
 */

router.post('', activityService);

module.exports = router;

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { swaggerUi, specs } = require('./swagger');

const routes = require('./src/routes');

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(morgan('dev'));
  app.use(routes);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  /**
   * @swagger
   * paths:
   *  /ping:
   *   get:
   *     summary: 서버 확인
   *     description: ''
   *     responses:
   *       '200':
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   example: 'pong'
   */
  app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong!' });
  });

  return app;
};

module.exports = { createApp };

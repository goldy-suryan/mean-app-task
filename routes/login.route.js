const router = require('express').Router();
const loginController = require('../controller/login.controller');


/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: username
 *         password:
 *           type: string
 *           description: password
 *       example:
 *         username: test@test.com
 *         password: secret
 */
~
/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Login api
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Some server error
 */

router.post('/login', loginController.loginController);

module.exports = router;
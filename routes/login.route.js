const router = require('express').Router();
const User = require('../model/user.model');
const jwt = require('jsonwebtoken');

const mockUser = {
    username: 'MTN_user@gmail.com',
    password: 'MTN281#^@*'
}

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

router.post('/login', async (req, res) => {
    try {
        let { username, password } = req.body;
        if (!username || !password) {
            return res.status(401).json({ success: false, result: 'Please provide username and password' });
        }
        if (mockUser.username.toLocaleLowerCase() === username.toLocaleLowerCase() && mockUser.password === password) {
            const token = jwt.sign({ user: username }, process.env.TOKEN_SECRET, {
                expiresIn: 60 * 60
            });
            return res.status(200).json({ success: true, result: 'logged in successfully', user: username, token });
        }

        return res.status(401).json({ success: false, result: 'Please provide valid credentials' });

    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
});

module.exports = router;
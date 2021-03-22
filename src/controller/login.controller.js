const jwt = require('jsonwebtoken');
const mockUser = {
    username: 'MTN_user@gmail.com',
    password: 'MTN281#^@*'
}

module.exports = {
    loginController: async (req, res) => {
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
    }
}
const jwt = require('jsonwebtoken');
const knex = require('../knexfile').development;

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('No token provided.');

    jwt.verify(token.split(' ')[1], 'your_jwt_secret', (err, decoded) => {
        if (err) return res.status(500).send('Failed to authenticate token.');
        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();
    });
};

const isAdmin = async (req, res, next) => {
    const user = await knex('users').where({ id: req.userId }).first();
    if (user.role_id !== 1) return res.status(403).send('Requires Admin Role!');
    next();
};

module.exports = { verifyToken, isAdmin };

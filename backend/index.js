// backend/index.js

const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
const jwtSecret = 'your_jwt_secret'; // Replace with a strong secret

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'db_tn'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// Signup route
app.post('/signup', (req, res) => {
    const { username, email, password, foto } = req.body; // Tambahkan foto ke dalam objek yang diambil dari body

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = 'INSERT INTO users (username, email, password, foto) VALUES (?, ?, ?, ?)'; // Ubah query untuk menyertakan foto
    db.query(sql, [username, email, hashedPassword, foto], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ message: 'Email already exists' });
            }
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(201).json({ message: 'User registered successfully' });
    });
});

// Login route
app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });

        if (results.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const user = results[0];

        // Compare the password
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT
        const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });

        res.json(
            {
                message: 'Login successful',
                token,
                email: user.email,
                username: user.username,
                foto: user.foto // Mengambil foto dari hasil query
            });
    });
});

app.post('/logout', (req, res) => {
    // Clear token from local storage
    // For example, if using cookies, clear the cookie
    res.clearCookie('token').json({ message: 'Logout successful' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

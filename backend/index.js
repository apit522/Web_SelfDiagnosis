const express = require('express')
const knex = require('knex')(require('./knexfile').development)
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3001
const jwtSecret = 'your_jwt_secret' // Replace with a strong secret

app.use(cors())
app.use(bodyParser.json())

// Signup route
app.post('/signup', async (req, res) => {
  const { username, email, password, foto } = req.body

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10)

  try {
    await knex('users').insert({
      username,
      email,
      password: hashedPassword,
      foto
    })
    res.status(201).json({ message: 'User registered successfully' })
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ message: 'Email already exists' })
    }
    return res.status(500).json({ message: 'Database error', error: err })
  }
})

// Login route
app.post('/signin', async (req, res) => {
  const { email, password } = req.body

  try {
    const users = await knex('users').where({ email })

    if (users.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' })
    }

    const user = users[0]

    // Compare the password
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ message: 'Invalid email or password' })
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, {
      expiresIn: '1h'
    })

    res.json({
      message: 'Login successful',
      token,
      email: user.email,
      username: user.username,
      foto: user.foto
    })
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err })
  }
})

app.post('/logout', (req, res) => {
  // Clear token from local storage
  // For example, if using cookies, clear the cookie
  res.clearCookie('token').json({ message: 'Logout successful' })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

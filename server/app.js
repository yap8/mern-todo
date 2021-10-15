require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()

// connect db and start server
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('db connected')
    app.listen(PORT)
    console.log(`server started on ${PORT}`)
    console.log(`http://localhost:${PORT}`)
  })

// middleware
app.use(express.json())

// routes
app.use('/api/todos', require('./routes/todoRoutes'))

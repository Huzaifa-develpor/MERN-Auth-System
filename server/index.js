const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const routes = require('./Routes/routes')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/auth/web', routes)


mongoose.connect(process.env.dburl)
    .then(() => {
        console.log("connected to database")
    })
    .catch((err) => {
        console.error("Database connection failed:", err)
    })


module.exports = app
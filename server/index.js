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


let isConnected = false

async function connectDB() {
    if (isConnected) return

    try {
        const db = await mongoose.connect(process.env.dburl, {
            serverSelectionTimeoutMS: 10000,
        })
        isConnected = db.connections[0].readyState === 1
        console.log("connected to database")
    } catch (err) {
        console.error("Database connection failed:", err)
        throw err
    }
}

// Ensure DB is connected before any route handles a request
app.use(async (req, res, next) => {
    try {
        await connectDB()
        next()
    } catch (err) {
        res.status(500).json({ status: 500, message: "Database connection failed" })
    }
})

app.use('/auth/web', routes)

module.exports = app
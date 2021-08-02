const express = require('express')
const cookieParser = require('cookie-parser')
const router = require('./router')

const app = express()

app.set(express.json())
app.set(express.urlencoded({extended: true}))
app.set(cookieParser())

app.use('/',router)

app.listen(process.env.PORT || 5000,console.log(`Listening at ${process.env.PORT || 5000}`))
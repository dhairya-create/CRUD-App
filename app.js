//Importing for using express and mongoose
const express = require('express')
const mongoose = require('mongoose')
require("dotenv/config")
const url = process.env.DB_URL

//Initialising express JS
const app = express()

//Connecting to database

//useNewUrlParser is for avoiding deprecation warning
mongoose.connect(url, { useNewUrlParser: true })

const con = mongoose.connection

//if it is connected to the database then it will print connected on console
con.on('open', () => {
    console.log("Database Connected...");
})

app.use(express.json())

//Importing the routes file
const alienRouter = require('./routers/aliens')

app.use('/aliens', alienRouter)

//Server is working on port number 9000
app.listen(9000, () => {

    console.log("Server Started");
})


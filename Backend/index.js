const express = require('express')
const { User } = require('./database')
const  router = express.Router()
const AllRoutes = require("./AllRoutes")
const app = express()
const cors = require("cors")
app.use(cors({
    origin: 'https://ai-chefgenerator-zw59.vercel.app',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));app.use(express.json())
app.use(AllRoutes)


app.listen(3000)
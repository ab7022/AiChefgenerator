const express = require('express')
const { User } = require('./database')
const  router = express.Router()
const AllRoutes = require("./AllRoutes")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(AllRoutes)


app.listen(3000)
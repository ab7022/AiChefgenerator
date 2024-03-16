const express = require("express");
const { User } = require("./database");
const router = express.Router();
const AllRoutes = require("./AllRoutes");
const app = express();
const cors = require("cors");
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://ai-chefgenerator-zw59.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(express.json());
app.use(AllRoutes);

app.listen(3000);

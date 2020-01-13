const express = require('express');
const Router = express.Router();

const usersRouter = require('./userRoutes');

Router.use('/api/users/', usersRouter)
//Router.use('/api',homeRouter)

module.exports = Router;

const { Router } = require('express');
const getCatalog = require('./controllers/getCatalog');
const catalogRouter = Router();

catalogRouter.get('/', getCatalog);
module.exports = catalogRouter;

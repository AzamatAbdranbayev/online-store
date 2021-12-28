const { Router } = require('express');
const productRouter = Router();
const { check } = require('express-validator');
const getOneTyre = require('./controllers/getOneTyre');
const getTyres = require('./controllers/getTyres');

productRouter.get('/tyres', getTyres);
productRouter.get('/tyres/:id', getOneTyre);

module.exports = productRouter;

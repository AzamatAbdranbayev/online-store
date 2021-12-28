const { Router } = require('express');
const projectSupportRouter = require('./projectSupport.router/projectSupport.router');
const userRouter = require('./user.router/user.router');
const catalogRouter = require('./catalog/catalog.router');
const productRouter = require('./product/product.router');

const mainRouter = Router();

mainRouter.use('/users', userRouter);
mainRouter.use('/projectSupport', projectSupportRouter);
mainRouter.use('/catalogs', catalogRouter);
mainRouter.use('/products', productRouter);
module.exports = mainRouter;

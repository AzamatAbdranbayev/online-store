const { Router } = require('express');
const projectSupportRouter = Router();
const { check } = require('express-validator');
const auth = require('./controllers/auth');
const addTyres = require('./controllers/addTyres');
const login = require('./controllers/login');
const saveTyres = require('./controllers/saveTyres');
const deleteTyre = require('./controllers/deleteTyre');

projectSupportRouter.post(
  '/',
  [
    check('email', 'Пожалуйста введите корректную почту').isEmail(),
    check('email', 'Почта не может быть пустой').notEmpty(),
  ],
  login
);
projectSupportRouter.post('/auth', auth);
projectSupportRouter.post('/addtyres', addTyres);
projectSupportRouter.post(
  '/savetyres/:id',
  [
    check('name', 'Наименование не может быть пустым').notEmpty(),
    check('description', 'Описание не может быть пустым').notEmpty(),
    check('price', 'Цена не может быть пустой').notEmpty(),
    check('width', 'Длина не может быть пустым').notEmpty(),
    check('height', 'Ширина не может быть пустым').notEmpty(),
    check('radius', 'Радиус не может быть пустым').notEmpty(),
    check('count', 'Количество не может быть пустым').notEmpty(),
  ],
  saveTyres
);
projectSupportRouter.delete('/deletetyres/:id', deleteTyre);

module.exports = projectSupportRouter;

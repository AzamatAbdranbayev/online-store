const { Router } = require('express');
const { check } = require('express-validator');
const userRouter = Router();

const auth = require('../../middlewares/auth.middlewares');
const createUser = require('./controllers/createUser');
const deleteSessionUser = require('./controllers/deleteSessionUser');
const createSessionUser = require('./controllers/createSessionsUser');
const findUser = require('./controllers/findUser');
const refreshUser = require('./controllers/refreshUser');

userRouter.get('/', auth, findUser);
userRouter.post(
  '/',
  [
    check('email', 'Пожалуйста введите корректную почту').isEmail(),
    check('email', 'Почта не может быть пустой').notEmpty(),
    check('username', 'Имя не может быть пустой').notEmpty(),
    check(
      'password',
      'Пароль должен быть больше 4 и меньше 10 и символов'
    ).isLength({ min: 4, max: 10 }),
  ],
  createUser
);
userRouter.delete('/sessions', auth, deleteSessionUser);
userRouter.post('/sessions', createSessionUser);
userRouter.post('/refresh', auth, refreshUser);

module.exports = userRouter;

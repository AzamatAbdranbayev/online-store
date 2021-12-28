const jwt = require('jsonwebtoken');

const config = require('../config/config');

module.exports = function (req, res, next) {
  const token = req.cookies.access_token;
  console.log('token in auth', token);
  if (!token) {
    return res.status(401).send({ message: 'Пользователь не авторизован' });
  }
  try {
    const data = jwt.verify(token, config.secretKeyJWT);
    req.user = data;
    return next();
  } catch (e) {
    return res.status(401).send({ message: 'Пользователь не авторизован' });
  }
};

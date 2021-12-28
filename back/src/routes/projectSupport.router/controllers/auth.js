const config = require('../../../config/config');

const auth = async (req, res) => {
  try {
    if (!config.projectSupportToken) {
      return res.status(401).send({ message: 'сессия истекла. Обновитесь' });
    }
    if (req.body.password === config.projectSupportToken) {
      return res.status(200).send({ message: config.projectSupportToken });
    } else {
      return res.status(401).send({ message: 'не правильный ввод пароля' });
    }
  } catch (e) {
    return res.status(401).send({ message: 'ошибка в авторизации' });
  }
};

module.exports = auth;

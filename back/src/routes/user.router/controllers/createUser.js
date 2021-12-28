const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const dbHelpers = require('../../../helpers/db.helpers');

const createUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .send({ message: 'Ошибка при регистрации', errors });
    }

    const { email, password, username, phone } = req.body;
    const user = await dbHelpers.findUserByEmail(email);
    if (user)
      return res
        .status(401)
        .send({ message: `Пользователь  ${email} уже существует!` });

    const hashPass = await bcrypt.hash(password, 10);
    return res
      .status(200)
      .send(await dbHelpers.createUserHelper(email, hashPass, username, phone));
  } catch (e) {
    return res.status(401).send(e);
  }
};

module.exports = createUser;

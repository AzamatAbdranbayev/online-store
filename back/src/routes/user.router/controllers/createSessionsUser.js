const dbHelpers = require('../../../helpers/db.helpers');
const jwt = require('jsonwebtoken');
const config = require('../../../config/config');

const createSessionUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Поиск пользователя по почте
    const user = await dbHelpers.findUserByEmail(email);
    if (!user) {
      return res
        .status(401)
        .send({ message: `Пользователь ${email} не найден` });
    }

    jwt.sign(
      {
        username: user.username,
        email: user.email,
        phone: user.phone,
        id: user.id,
      },
      config.secretKeyJWT,
      { expiresIn: '2h' },
      async function (err, token) {
        if (err) {
          return res.status(401).send(err);
        } else {
          const foundUser = await dbHelpers.createSessionUser(email, token);
          return res
            .cookie('access_token', token, {
              httpOnly: false,
            })
            .status(200)
            .send(foundUser);
        }
      }
    );
  } catch (e) {
    return res.status(401).send(e);
  }
};

module.exports = createSessionUser;

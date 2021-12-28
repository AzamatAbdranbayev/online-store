const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { nanoid } = require('nanoid');
const config = require('../../../config/config');
const nodemailer = require('nodemailer');

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ message: 'Ошибка при входе', errors });
    }
    const { email } = req.body;

    if (email === config.projectSupportEmail) {
      config.projectSupportToken = nanoid(5);

      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'aabdranbayev@gmail.com',
          pass: 'qzzzcmeuopgtpgna',
        },
      });

      let mailOptions = {
        from: 'aabdranbayev@gmail.com',
        to: 'jopnik254@gmail.com',
        subject: 'Авторизация по почте',
        html: `<span>Ваш код авторизации <strong>${config.projectSupportToken} </strong><br>Пожалуйста не сообщайте никому код</span>`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          return res.status(401).send({ message: 'Ошибка при авторизации' });
        } else {
          console.log('email sent: ', info.response);
          return res.status(200).send({ message: 'ok' });
        }
      });
    } else {
      return res.status(401).send({ message: 'Ошибка при авторизации' });
    }

    // const { email, password, username, phone } = req.body;
    // const user = await dbHelpers.findUserByEmail(email);
    // if (user)
    //   return res
    //     .status(401)
    //     .send({ message: `Пользователь  ${email} уже существует!` });

    // const hashPass = await bcrypt.hash(password, 10);
    // return res
    //   .status(200)
    //   .send(await dbHelpers.createUserHelper(email, hashPass, username, phone));
  } catch (e) {
    return res.status(401).send(e);
  }
};

module.exports = login;

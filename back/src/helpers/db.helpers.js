const db = require('../../db');

dbHelpers = {
  async createUserHelper(email, password, username, phone) {
    try {
      const newUser = await db.query(
        'INSERT INTO public.user (email,password,username,phone) values ($1,$2,$3,$4) RETURNING *',
        [email, password, username, phone]
      );
      const response = Object.assign({}, newUser.rows[0]);
      delete response.password;
      return response;
    } catch (e) {
      console.log(e);
      return { message: 'Не удалось создать пользователя' };
    }
  },
  async findUserByEmail(email) {
    try {
      const person = await db.query(
        'SELECT * FROM public.user WHERE email = $1',
        [email]
      );
      return person.rows[0];
    } catch (e) {
      return {};
    }
  },
  async findUserById(id) {
    try {
      const person = await db.query('SELECT * FROM public.user WHERE id = $1', [
        id,
      ]);
      return person.rows[0];
    } catch (e) {
      return {};
    }
  },
  async createSessionUser(email, token) {
    try {
      const person = await db.query(
        'UPDATE public.user SET token = $1 WHERE email = $2 RETURNING *',
        [token, email]
      );
      console.log('createSessionUser', person);
      const response = Object.assign({}, person.rows[0]);
      delete response.password;
      return response;
    } catch (e) {
      console.log('createSessionUser (e', e);
      return { message: 'Не удалось создать пользователя' };
    }
  },
};

module.exports = dbHelpers;

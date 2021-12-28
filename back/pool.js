const Pool = require('pg').Pool;
let pool = null;

module.exports = {
  connection: async () => {
    pool = new Pool({
      user: 'postgres',
      password: 'azathebest125',
      host: 'localhost',
      port: 5432,
      database: 'tayressauda',
    });
    await pool.connect();
  },
  query: async (text) => await pool.query(text),
  end: async () => await pool.end(),
};

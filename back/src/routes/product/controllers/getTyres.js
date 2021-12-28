const pool = require('../../../../pool');

const getTyres = async (req, res) => {
  try {
    await pool.connection();
    const tyres = await pool.query(
      'SELECT * FROM public.tyres ORDER BY id ASC'
    );
    return res.status(200).send(tyres.rows);
  } catch (e) {
    return res.status(401).send({ message: e });
  } finally {
    await pool.end();
  }
};

module.exports = getTyres;

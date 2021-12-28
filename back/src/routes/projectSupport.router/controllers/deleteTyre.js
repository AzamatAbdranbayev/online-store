const pool = require('../../../../pool');
const { deletefile } = require('../../../helpers/file.helpers');

const deleteTyre = async (req, res) => {
  try {
    const id = req.params.id;
    await pool.connection();
    const deletedTyres = await pool.query(
      `DELETE FROM public.tyres WHERE id = ${parseInt(id)}  RETURNING *`
    );
    deletefile(`public/uploads/tyres/${deletedTyres.rows[0].photo}`);
    console.log(deletedTyres);
    return res.status(200).send(deletedTyres.rows);
  } catch (e) {
    return res.status(401).send({ message: e });
  } finally {
    await pool.end();
  }
};

module.exports = deleteTyre;

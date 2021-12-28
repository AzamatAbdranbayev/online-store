const pool = require('../../../../pool');
const getCatalog = async (req, res) => {
  try {
    await pool.connection();
    const catalogs = await pool.query('SELECT * FROM public.catalog');
    const catalogproducts = await pool.query(
      'SELECT * FROM public.catalogproducts'
    );

    return res
      .status(200)
      .send({ catalogs: catalogs.rows, catalogproducts: catalogproducts.rows });
  } catch (e) {
    console.log(e);
    return res.status(401).send({ message: e });
  } finally {
    await pool.end();
  }
};

module.exports = getCatalog;

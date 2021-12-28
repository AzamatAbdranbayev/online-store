const pool = require('../../../../pool');

const getOneTyre = async (req, res) => {
  try {
    await pool.connection();
    const tyres = await pool.query(
      `SELECT T.*,C.name as "productType" 
      FROM public.tyres AS T
      INNER JOIN public.catalogproducts AS C
      ON T.idcatalogproduct = C.id
      WHERE T.id = ${req.params.id}`
    );
    return res.send(tyres.rows);
  } catch (e) {
    return res.status(401).send({ message: e });
  } finally {
    await pool.end();
  }
};

module.exports = getOneTyre;

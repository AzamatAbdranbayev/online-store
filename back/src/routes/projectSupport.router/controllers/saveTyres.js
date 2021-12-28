const pool = require('../../../../pool');
const { validationResult } = require('express-validator');

const saveTyres = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;

    console.log(data);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({
        message: `Ошибка при сохранении товара. ${errors.errors[0].msg}`,
      });
    }

    await pool.connection();
    const tyres = await pool.query(
      `UPDATE public.tyres SET name = '${data.name}', description = '${
        data.description
      }', price = '${parseInt(data.price)}', season = '${
        data.season
      }',width = '${data.width}',height = '${data.height}',studded='${
        data.studded
      }',count='${parseInt(data.count)}',radius='${data.radius}',type='${
        data.type
      }'  WHERE id = ${parseInt(id)} RETURNING *`
    );
    return res.status(200).send(tyres.rows);
  } catch (e) {
    return res.status(401).send({ message: e });
  } finally {
    await pool.end();
  }
};

module.exports = saveTyres;

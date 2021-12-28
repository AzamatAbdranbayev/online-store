const pool = require('../../../../pool');
const { nanoid } = require('nanoid');
const { saveFile } = require('../../../helpers/file.helpers');
const addTyres = async (req, res) => {
  try {
    console.log(req.body);
    const {
      photo,
      name,
      description,
      idcatalog,
      idcatalogproduct,
      price,
      width,
      height,
      season,
      studded,
      count,
      radius,
      type,
    } = req.body;
    if (
      photo === '' ||
      name === '' ||
      description === '' ||
      idcatalog === '' ||
      idcatalogproduct === '' ||
      price === '' ||
      width === '' ||
      height === '' ||
      count === '' ||
      radius === ''
    ) {
      return res
        .status(401)
        .send({ message: 'Пустые поля. Проверьте корректность ввода' });
    } else {
      if (!req.files) {
        return res.status(401).send({ message: 'Пустые поле изображения' });
      } else {
        const fileName = `tyres_R-${width}-${height}_${nanoid(10)}_${
          req.files.photo.name
        }`;
        console.log(req.body);
        await pool.connection();
        console.log('filename : ', fileName);
        const product = await pool.query(
          `INSERT INTO public.tyres (photo,name,description,idcatalogproduct,price,width,height,season,studded,count,radius,type) values ('${fileName}','${name}','${description}',${parseInt(
            idcatalogproduct
          )},${parseInt(
            price
          )},'${width}','${height}','${season}','${studded}','${count}','${parseInt(
            radius
          )}','${type}') RETURNING *`
        );
        saveFile(req.files.photo, 'tyres', fileName);
        return res.status(200).send(product);
      }
    }
  } catch (e) {
    console.log(e);
    return res.status(401).send({ message: e });
  } finally {
    await pool.end();
  }
};

module.exports = addTyres;

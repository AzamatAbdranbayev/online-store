const dbHelpers = require('../../../helpers/db.helpers');

const findUser = async (req, res) => {
  try {
    const { email } = req.body;
    console.log('req.user', req.user);
    return res.status(200).send(await dbHelpers.findUserByEmail(email));
  } catch (e) {
    return res.status(401).send(e);
  }
};

module.exports = findUser;

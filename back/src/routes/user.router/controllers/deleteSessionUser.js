const dbHelpers = require('../../../helpers/db.helpers');

const deleteSessionUser = async (req, res) => {
  console.log(req.user);
  await dbHelpers.createSessionUser(req.user.email, '');
  return res
    .clearCookie('access_token')
    .status(200)
    .send({ message: 'Успешно! ' });
};

module.exports = deleteSessionUser;

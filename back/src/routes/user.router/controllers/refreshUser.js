const jwt = require('jsonwebtoken');

const refreshUser = async (req, res) => {
  try {
    return res.send(req.user);
  } catch (e) {
    return res.status(401).send(e);
  }
};

module.exports = refreshUser;

const jwt = require('jsonwebtoken');
const mySecret = require('../../config');
const User = require('../models/userModel');

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid Username/Password' });
      return;
    }
    if (user === null) {
      res.status(422).json({ error: 'No user with that username in our records' });
      return;
    }
    user.checkPassword(password, (nonMatch, hashMatch) => {
      if (nonMatch !== null) {
        res.status(422).json({ error: "passwords don't match" });
        return;
      }
      if (hashMatch) {
        const payload = { username: user.username };
        const token = jwt.sign(payload, mySecret.toString());
        res.json({ token });
      }
    });
  });
};

module.exports = login;

const { User } = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.Register = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.json({ msg: "success!", user: user });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.Login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        res.json({ msg: "invalid login attempt 1" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((passwordIsValid) => {
            if (passwordIsValid) {
              const newJWT = jwt.sign({
                _id: user._id,
              });
              const secret = "keepThisSecret";
              res
                .cookie("usertoken", newJWT, secret, {
                  httpOnly: true,
                })
                .json({ msg: "success!" });
            } else {
              res.json({ msg: "invalid login attempt 2" });
            }
          })
          .catch((err) => res.json({ msg: "invalid login attempt 3" }));
      }
    })
    .catch((err) => res.json(err));
};

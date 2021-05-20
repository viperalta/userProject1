const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.Register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    const jwtToken = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

    return res
      .cookie("usertoken", jwtToken, process.env.SECRET_KEY, {
        httpOnly: true,
      })
      .json({ email: user.email, _id: user._id });
  } 
  catch (err) {
    res
      .status(400)
      .json(err);
  }
};

module.exports.Login = async (req, res) => {
  try{
    const user = await User.findOne({ email: req.body.email });

  if (user === null) {
    // email not found in users collection
    res.status(400).json({  errors: { error: { message: 'El usuario no existe' } }, });
  }

  const correctPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!correctPassword) {
    res.status(400).json({  errors: { error: { message: 'La contraseña es incorrecta' } }, });
  }

  const userToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.SECRET_KEY
  );
 
  res
    .cookie("usertoken", userToken, process.env.SECRET_KEY, {
      httpOnly: true,
    })
    .json({ msg: "success!" });

  }
  catch (err) {
    res
      .status(400)
      .json(err);
  }
  
};

module.exports.getAll=(request,response)=>{
  User.find({})
  .then(users=>response.json(users))
  .catch(err=>response.json(err))
}
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  getAll,
  getOne
}

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}

async function signup (req, res) {
  console.log("--------->>>>>>>>")
  let dummy = {
    username: req.body.username,
    email: req.body.email,
    age: req.body.age,
    password: req.body.password,
    description: req.body.description,
    whatToOffer: req.body.whatToOffer,
    ageRanges: req.body.ageRanges,
    match: req.body.match
  }

  try {
    const user = await User.create(dummy);
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    console.log(user)
    if (!user) return res.status(401).json({err: 'bad credentials'});

    user.comparePassword(req.body.password, (err, isMatch) => {

      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function getAll(req, res) {
  try {
    const users = await User.find({});
    if(!users){
        res.status(200).json({users:[
          {
          "username": "Shyguy",
          "email": "email@gmail.com",
          "password": "asdfasdf",
          "age": 54,
          "description": ["Caring", "Curious", "Adventurous"],
          "whatToOffer": ["Life Advice", "Stories", "Pop Culture"]
        }
      ] })
    }
    res.status(200).json({ users });
  } catch (err) {
    res.json({ users: [
      {
      "username": "Shyguy",
      "email": "email@gmail.com",
      "password": "asdfasdf",
      "age": 54,
      "description": ["Caring", "Curious", "Adventurous"],
      "whatToOffer": ["Life Advice", "Stories", "Pop Culture"]
    }
  ] });
  console.log('database empty')
  }
};

async function getOne(req, res) {
    try {
      const user = await User.find({ username: req.params.id });
      res.status(200).json({ user });
    } catch (err) {
      res.json({ data: err });
    }
};

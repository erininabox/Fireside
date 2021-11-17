const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
}

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}

async function signup (req, res) {
  let dummy = {
    username: req.body.username,
    email: req.body.email,
    age: req.body.age,
    password: req.body.password,
    description: req.body.description,
    whatToOffer: req.body.whatToOffer,
    ageRanges: req.body.ageRanges
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
    if (!user) return res.status(401).json({err: 'bad credentials'});
    // had to update the password from req.body.pw, to req.body password
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


//const userRouter = require('express').Router();


// create route in server.js -> controllers/auth

// Read (Show)
// userRouter.get('/', async (req, res) => {
//   try {
//     const foundUsers = await User.find({})
//     res.status(200).json(foundUsers)
//   } catch(error) {
//     console.error(error)
//     res.status(404).json({message: error.message})
//   }
// });

// Read (Index)
// userRouter.get('/:id', async (req, res) => {
//   try {
//     const foundUser = await User.findById(req.params.id)
//     res.status(200).json(foundUser)
//   } catch(error) {
//     console.error(error)
//   res.status(400).json({message: error.message})
//   }
// });

// Update
// userRouter.put('/:id', async (req, res) => {
//   try{
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     res.status(200).json(updatedUser)
//   } catch(error){
//     console.error(error)
//     res.status(400).json({message: error.message})
//   }
// });

// Delete
// userRouter.delete('/:id', async(req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.id)
//     res.status(200).json(deletedUser)
//   } catch (error) {
//     console.error(error)
//     res.status(400).json({
//       message: error.message
//     })
//   }
// });

// module.exports = userRouter;

const User = require('../models/user');
const userRouter = require('express').Router();


// create route in server.js -> controllers/auth

// Read (Show)
userRouter.get('/', async (req, res) => {
  try {
    const foundUsers = await User.find({})
    res.status(200).json(foundUsers)
  } catch(error) {
    console.error(error)
    res.status(404).json({message: error.message})
  }
});

// Read (Index)
userRouter.get('/:id', async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id)
    res.status(200).json(foundUser)
  } catch(error) {
    console.error(error)
  res.status(400).json({message: error.message})
  }
});

// Update
userRouter.put('/:id', async (req, res) => {
  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedUser)
  } catch(error){
    console.error(error)
    res.status(400).json({message: error.message})
  }
});

// Delete
userRouter.delete('/:id', async(req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedUser)
  } catch (error) {
    console.error(error)
    res.status(400).json({
      message: error.message
    })
  }
});

module.exports = userRouter;

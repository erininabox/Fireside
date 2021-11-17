const Member = require('../models/member');
const router = require('express').Router();


//Create
router.post('/', async(req, res) => {
  try {
    const createdMember = await Member.create(req.body)
    res.status(200).json(createdMember)
  } catch(error){
    console.error(error)
    res.status(400).json({message: error.message})
  }
});

// Read (Show)
router.get('/', async (req, res) => {
    console.log(req.headers)
  try {
    const foundMembers = await Member.find({})
    res.status(200).json(foundMembers)
  } catch(error) {
    console.error(error)
    res.status(404).json({message: error.message})
  }
});

// Read (Index)
router.get('/:id', async (req, res) => {
  try {
    const foundMember = await Member.findById(req.params.id)
    res.status(200).json(foundMember)
  } catch(error) {
    console.error(error)
  res.status(400).json({message: error.message})
  }
});

// Update
router.put('/:id', async (req, res) => {
  try{
    const updatedMember = await Member.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedMember)
  } catch(error){
    console.error(error)
    res.status(400).json({message: error.message})
  }
});

// Delete
router.delete('/:id', async(req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedMember)
  } catch (error) {
    console.error(error)
    res.status(400).json({
      message: error.message
    })
  }
});

module.exports = router;

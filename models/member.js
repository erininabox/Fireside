const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const memberSchema = new mongoose.Schema({
  username:   {type: String, required: true, lowercase: true, unique: true},
  email:      {type: String, required: true, lowercase: true, unique: true},
  password:   {type: String, required: true},
  age:        {type: String, required: true},
  ageRanges:  [],
  description:[]
}, {
  timestamps: true
});

module.exports = model('Member', memberSchema);

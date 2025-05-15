const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  googleId: String,
  githubId: String,
  displayName: {type : String, required: true, notEmpty:true},
  email: {type: String, unique: true, required: true},
  avatar: String
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

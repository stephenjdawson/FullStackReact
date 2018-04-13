const mongoose = require('mongoose');
// same thing as below, the below version is destructured: const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

mongoose.model('users', userSchema);

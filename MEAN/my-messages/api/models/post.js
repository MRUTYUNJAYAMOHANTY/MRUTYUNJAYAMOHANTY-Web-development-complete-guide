const mongoose = require('mongoose');
// blueprint defination is schema
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});
module.exports = mongoose.model('Post', postSchema); // Post is modelname.name is upto you.first letter must be capital letter
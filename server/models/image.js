const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: { type: String },
});

imageSchema.statics.upload = (file, cb) => {
  
}

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;

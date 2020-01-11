var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserImageSchema = new Schema({
  userImage: {
    type: String,
    required: true
  }
});

var UserImage = mongoose.model('UserImage', UserImageSchema);
module.exports = UserImage;

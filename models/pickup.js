var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PickUpSchema = new Schema({
  // _userId: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User"
  // },
  pickUpTime: {
    type: Number,
    required: true
  },
  pickUpDate: {
    type: Date,
    required: true
  }
});

var PickUp = mongoose.model('PickUp', PickUpSchema);
module.exports = PickUp;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var monthlySchema = new Schema({
  // _userId: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User"
  // },
  carType: {
    type: String,
    required: true
  },
  carMake: {
    type: String,
    trim: true
  },
  carModel: {
    type: String,
    trim: true
  },
  carColor: {
    type: String,
    trim: true
  },
  licensePlate: {
    type: String,
    trim: true
  }
  // ,
  // startDate: {
  //     type: Date,
  //     required: true,
  //     default: Date.now
  // },
  // balance: Number,
  // paid: {
  //     type: Boolean,
  //     required: true,
  //     default: false
  // },
  // billingCycle: {
  //     type: String,
  //     required: true
  // }
});

var Monthly = mongoose.model('Monthly', monthlySchema);
module.exports = Monthly;

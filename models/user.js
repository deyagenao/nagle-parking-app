var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: { index: { unique: true } },
    required: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address.'
    ]
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: `Please fill a valid phone number.`
    },
    required: [true, 'User phone number required']
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
  },
  isMonthly: {
    type: Boolean,
    default: false
  },
  billPaid: {
    type: Boolean,
    default: false
  },
  pickUpActive: {
    type: Boolean,
    default: false
  },
  pickUpTime: {
    type: String,
    trim: true
  },
  pickUpDate: {
    type: String,
    trim: true
  },
  carType: {
    type: String,
    trim: true
  },
  reviews: {
    type: String,
    trim: true
  },
  hasReviews: {
    type: Boolean,
    default: false
  },
  billingCycle: String,
  default: false
});

//hashing a password before saving it to the database
UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, 14, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

//authenticate input against database
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email }).exec(function(err, user) {
    if (err) {
      return callback(err);
    } else if (!user) {
      var err = new Error('User not found.');
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, user.password, function(err, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    });
  });
};
var User = mongoose.model('User', UserSchema);
module.exports = User;

var mongoose = require('mongoose');

var PickUpSchema = new mongoose.Schema({
    _userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    pickUpTime: {
        type: Date,
        // default: Date.now,
        required: true
    }
})

var PickUp = mongoose.model('PickUp', PickUpSchema);
module.exports = PickUp;
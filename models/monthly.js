var mongoose = require('mongoose');

var monthlySchema = new mongoose.Schema({
    _userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    priceRate: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    balance: Number,
    paid: {
        type: Boolean, 
        required: true,
        default: false
    },
    billingCycle: {
        type: String,
        required: true
    }
})

var Monthly = mongoose.model('Monthly', monthlySchema);
module.exports = Monthly;
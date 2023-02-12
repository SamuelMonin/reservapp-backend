const mongoose = require('mongoose');

 const ReservationSchema = new mongoose.Schema({
    _id: String,
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
 })

 module.exports = mongoose.model('reservation', ReservationSchema);
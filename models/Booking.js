var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookingSchema = new Schema({
    userId: String,
    startTimestamp: Date,
    endTimestamp: Date
});

global.BookingSchema =
    global.BookingSchema || mongoose.model("Booking", BookingSchema);
module.exports = global.BookingSchema;

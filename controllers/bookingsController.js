const mongoose = require("mongoose");
const passport = require("passport");
const createError = require("http-errors");
const User = require("../models/User");
const Booking = require("../models/Booking")

var urlController = {}

urlController.bookings = async (req, res, next) => {
    if (req.user) {
        var bookings = await Booking.find({ userId: req.user._id })
        res.render("bookings/bookings", { user: req.user, bookings: bookings })
    } else {
        res.redirect("/")
    }
}

module.exports = urlController                          
var express = require("express");
var router = express.Router();
var bookingsController = require("../controllers/bookingsController");
var passport = require("passport");

router.get("/", bookingsController.bookings)

module.exports = router
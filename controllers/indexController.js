var mongoose = require("mongoose");
var passport = require("passport");
var createError = require("http-errors");
var User = require("../models/User");

var urlController = {};

urlController.home = function (req, res, next) {
  if (req.user) {
    res.render("index", { user: req.user });
  } else {
    res.render("public_index");
  }
};

urlController.login = function (req, res, next) {
  if (req.user) {
    res.redirect("back");
  } else {
    res.render("login");
  }
};

urlController.logout = function (req, res, next) {
  if (req.user) {
    req.logout();
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
};

urlController.googleOauth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

urlController.googleOauthCallback = passport.authenticate("google", {
  failureRedirect: "/login",
});

module.exports = urlController;
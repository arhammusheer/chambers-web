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

urlController.room = function (req, res, next) {
  if (req.user) {
    res.render("room", { roomName: req.params.roomKey });
  } else {
    res.redirect("/login");
  }
};

urlController.profile = function (req, res, next) {
  if (req.user) {
    res.render("profile", { user: req.user });
  } else {
    res.redirect("/login");
  }
};

urlController.profileEdit = function (req, res, next) {
  if (req.user) {
    User.findOneAndUpdate(
      req.user._id,
      {
        nickname: req.body.nickname,
      },
      function (err, docs) {
        if (err) {
          console.log(err);
          res.status(500);
        } else {
          console.log("updated user : ", docs);
          req.user.nickname = req.body.nickname;
          res.redirect(req.get("referer"));
        }
      }
    );
  } else {
    res.status(400);
  }
};

module.exports = urlController;

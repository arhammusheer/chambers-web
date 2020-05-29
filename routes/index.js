var express = require("express");
var router = express.Router();
var urlController = require("../controllers/UrlController.js");
var passport = require("passport");

router.get("/", urlController.home);

router.get("/login", urlController.login);

router.get("/logout", urlController.logout);

// google Auth
router.get("/auth/google", urlController.googleOauth);

// google Auth Callback
router.get(
  "/auth/google/callback",
  urlController.googleOauthCallback,
  function (req, res) {
    res.redirect("/");
  }
);

// User Profile
router.get("/profile", urlController.profile);

// Rooms
router.get("/room/:roomKey", urlController.room);

module.exports = router;

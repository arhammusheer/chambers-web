var express = require("express");
var router = express.Router();
var indexController = require("../controllers/indexController.js");
var passport = require("passport");

router.get("/", indexController.home);

router.get("/login", indexController.login);

router.get("/logout", indexController.logout);

// google Auth
router.get("/auth/google", indexController.googleOauth);

// google Auth Callback
router.get(
  "/auth/google/callback",
  indexController.googleOauthCallback,
  function (req, res) {
    res.redirect("/");
  }
);

module.exports = router;
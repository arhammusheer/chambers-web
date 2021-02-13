const cookieSession = require("cookie-session");
const express = require("express");
const app = express();

const session = require("express-session");
// const authRoutes = require("./routes/auth-routes");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // parse cookie header
const bodyParser = require("body-parser");

const path = require("path");
const createError = require("http-errors");
const logger = require("morgan");
require("dotenv").config();


const indexRouter = require("./routes/index");
const bookingsRouter = require("./routes/bookings");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.EXPRESS_SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 100
  })
);

// MongoDB setup
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL_WITH_CREDS, {
    dbName: "letMeIn",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

// Passport Auth Setup
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

app.use(passport.initialize());
app.use(passport.session());

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// User Auth Setup

var User = require("./models/User");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_ID,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate(
        {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile._json.email,
          pictureUrl: profile._json.picture,
        },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Express error Handling and static
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'react_client', 'build')));
app.use(express.static(path.join(__dirname, "public")));


// app.use("/auth", authRoutes);
app.use("/", indexRouter);
app.use("/bookings", bookingsRouter);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'react_client', 'build', 'index.html'));
// });


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});


module.exports = app;

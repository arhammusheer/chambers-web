var mongoose = require("mongoose");
var findOrCreate = require("mongoose-findorcreate");

var Schema = mongoose.Schema;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const generate = require("name-creator");

var UserSchema = new Schema({
  displayName: String,
  firstName: String,
  lastName: String,
  username: String,
  nickname: { type: String, default: generate().dashed },
  color: { type: String, default: getRandomColor() },
  googleId: String,
  email: String,
  pictureUrl: String,
  phone: String,
});

UserSchema.plugin(findOrCreate);

global.UserSchema = global.UserSchema || mongoose.model("User", UserSchema);
module.exports = global.UserSchema;

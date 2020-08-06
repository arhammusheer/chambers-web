var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    displayName: String,
    firstName: String,
    lastName: String,
    username: String,
    nickname: String,
    googleId: String,
    email: String,
    pictureUrl: String,
    phone: String
});

UserSchema.plugin(findOrCreate);

global.UserSchema = global.UserSchema || mongoose.model('User', UserSchema);
module.exports = global.UserSchema;
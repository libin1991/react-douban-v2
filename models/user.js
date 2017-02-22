/**
 * Created by QIXIN on 2017/2/22.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  nickname: String,
  password: String
});

var user = mongoose.model('users', UserSchema);
module.exports = user;

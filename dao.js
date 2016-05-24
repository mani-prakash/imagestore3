var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var constants = require('./constants')
mongoose.connect(constants.MONGO_URI);

var userSchema = new Schema(
  {
    id: String,
    horizontal: String,
    vertical: String,
    horizontalSmall: String,
    gallery: String
  }
);
var userMod = mongoose.model('user',userSchema)

var updateUser = function (user, callback) {
  var id = user.id
  delete user.id
  return userMod.update({id: id}, user, {upsert: true}, callback)
}

var getUser = function(userId,callback){
  return userMod.find({id: userId},function(err,data){
    if(err){
      return callback(err)
    }
    return callback(null,data)
  })
}

module.exports = {
  updateUser: updateUser,
  getUser: getUser
}
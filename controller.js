var dao = require('./dao');

var getUser = function (userId, callback) {
  return dao.getUser(userId,callback)
}

var saveUser = function (user, callback) {
  return dao.updateUser(user,callback)
}

exports.getUser = getUser
exports.saveUser = saveUser
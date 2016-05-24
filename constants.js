exports.MONGO_URI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/HelloMongoose';
exports.MONGO_PORT = process.env.PORT || 5000;
const dbConfig = require("../config/db.config")

const mongoose = require('mongoose');

mongoose.Promise = global.Promise

const db = {}
db.url = dbConfig.url
db.mongoose = mongoose
db.user = require("./user.model")(mongoose)

module.exports = db
const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

const connectToMongo = () => {
  mongoose.connect(MONGODB_URI);
};

module.exports = connectToMongo;

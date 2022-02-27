const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const dbobject = mongoose.connection;

dbobject.on("connected", () => {
  console.log("Mongo DB Connection Success...");
});
dbobject.on("error", () => {
  console.log("Mongo DB Connection Failed...");
});

module.exports = mongoose;

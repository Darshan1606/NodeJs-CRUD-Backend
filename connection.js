const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:1234@cluster0.ijjkb.mongodb.net/DemoCRUD?retryWrites=true&w=majority",
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

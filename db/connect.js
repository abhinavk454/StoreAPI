const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, client) => {
      if (err) {
        return console.error(err);
      }
      console.log("Connected to database");
    }
  );
};

module.exports = connectDB;

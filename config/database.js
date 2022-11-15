const mongoose = require("mongoose");

exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log(`DATABASE CONNECTED`))
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
};

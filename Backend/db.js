const mongoose = require("mongoose");

const url =
  "mongodb+srv://amandabral5:amandabral@quoracluster.kiz3487.mongodb.net/?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database Connected Successdfully");
    })
    .catch((e) => {
      console.log("Error Occurred Connecting Database", e);
    });
};

const mongoose = require("mongoose");

const db = "mongodb://127.0.0.1:27017/csv_files";

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Error in connecting with Database: ", +err);
  });

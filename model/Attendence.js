const mongoose = require("mongoose");

const AttendenceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
});
// todo first one is the table name and secondOne is the schema
const Attendence = mongoose.model("Attendence", AttendenceSchema);

module.exports = Attendence;

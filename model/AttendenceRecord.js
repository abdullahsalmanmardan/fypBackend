const mongoose = require("mongoose");

const AttendenceRecordSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  AttendenceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AttendenceSchema",
  },
});
// todo first one is the table name and secondOne is the schema
const AttendenceRecord = mongoose.model(
  "AttendenceRecord",
  AttendenceRecordSchema
);

module.exports = AttendenceRecord;

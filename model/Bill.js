const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  billType: {
    type: string,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
});
// todo first one is the table name and secondOne is the schema
const Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;

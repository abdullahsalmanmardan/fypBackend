const mongoose = require("mongoose");

const PaySchema = new mongoose.Schema({
  Paydate: {
    type: Date,
    required: true,
  },
  bonus: {
    type: Number,
    required: true,
    default: 0,
  },
  fine: {
    type: Number,
    required: true,
    default: 0,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
});
// todo first one is the table name and secondOne is the schema
const Pay = mongoose.model("Pay", PaySchema);

module.exports = Pay;

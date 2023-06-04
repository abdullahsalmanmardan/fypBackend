const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
  qty: {
    type: Number,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductSchema",
  },
  billid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BillSchema",
  },
});
// todo first one is the table name and secondOne is the schema
const Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;

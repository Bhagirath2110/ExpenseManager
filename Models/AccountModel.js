const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  balance: {
    type: Number,
    require:true
  },
  currencyType: {
    type: Schema.Types.ObjectId,
    ref: "CurrencyType",
  },
  default: {
    type: Boolean,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require : true
  },
  accountType: {
    type: Schema.Types.ObjectId,
    ref: "AccountType",
  },
});

module.exports = mongoose.model("Account", AccountSchema);

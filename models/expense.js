const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategory" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;

const Expense = require('../models/expense');

const getExpenses = async (req, res) => {
  const expenses = await Expense.find({ user: req.user.id }).populate('category subcategory');
  res.json(expenses);
};

const createExpense = async (req, res) => {
  const { description, amount, category, subcategory } = req.body;
  const expense = new Expense({ description, amount, category, subcategory, user: req.user.id });
  await expense.save();
  res.json(expense);
};

module.exports = { getExpenses, createExpense };

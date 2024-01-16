const Category = require("../models/category");

const getCategories = async (req, res) => {
  const categories = await Category.find().populate("subcategories");
  res.json(categories);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });
  await category.save();
  res.json(category);
};

module.exports = { getCategories, createCategory };

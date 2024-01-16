const Subcategory = require("../models/subcategory");

const getSubcategories = async (req, res) => {
  const subcategories = await Subcategory.find();
  res.json(subcategories);
};

const createSubcategory = async (req, res) => {
  const { name } = req.body;
  const subcategory = new Subcategory({ name });
  await subcategory.save();
  res.json(subcategory);
};

module.exports = { getSubcategories, createSubcategory };

const Category = require('../models/Category.model');

module.exports.categoryController = {
  addCategory: async (req, res) => {
    try {
      await Category.create({
        name: req.body.name
      });
      res.json(`Добалена категория ${ req.body.name }`)
    } catch (e) {
      res.json(e)
    }
  },
  deleteCategory: async (req, res) => {
    try {
      res.json(`Удалена категория ${(await Category.findByIdAndDelete(req.params.id)).name}`);
    } catch (e) {
      res.json(e)
    }
  },
  updateCategory: async (req, res) => {
    try {
      res.json(`Изменена категория ${(await Category.findByIdAndUpdate({...req.body})).name}`)
    } catch (e) {
      res.json(e)
    }
  },
  getCategory: async (req, res) => {
    const { id } = req.params;
    try {
      res.json(Category.findById(id));
    } catch (e) {
      res.json(e)
    }
  },
  getCategories: async (req, res) => {
    try {
      res.json(await Category.find({}));
    } catch (e) {
      res.json(e);
    }
  }
}
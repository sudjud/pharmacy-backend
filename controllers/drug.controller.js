const Drug = require('../models/Drug.model');

module.exports.drugController = {
  addDrug: async (req, res) => {
    const { name, price, needRecipe, category } = req.body;
    try {
      await Drug.create({
        name,
        price,
        needRecipe,
        category
      });
      res.json(`Лекарство "${name}" добавлено`)
    } catch (e) {
      res.json(e);
    }
  },
  deleteDrug: async (req, res) => {
    const { id } = req.params;
    try {
      res.json(`Удалено лекартсво ${(await Drug.findByIdAndDelete(id)).name}`)
    } catch (e) {
      res.json(e);
    }
  },
  updateDrug: async (req, res) => {
    const { id } = req.params;
    try {
      res.json(`Изменено лекартсво ${(await Drug.findByIdAndUpdate(id, {...req.body})).name}`)
    } catch (e) {
      res.json(e);
    }
  },
  getDrug: async (req, res) => {
    const {id} = req.params;
    try {
      res.json(await Drug.findById(id).populate('category', '-__v -_id'))
    } catch (e) {
      res.json(e);
    }
  },
  getDrugs: async (req, res) => {
    try {
      res.json(await Drug.find({}).populate('category', '-__v -_id'))
    } catch (e) {
      res.json(e);
    }
  },
  getDrungByCategory: async (req, res) => {
    const {id} = req.params
    try {
      res.json(await Drug.find({
        category: id
      }));
    } catch (e) {
      res.json(e);
    }
  }
}
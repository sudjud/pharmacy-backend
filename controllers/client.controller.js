const Client = require('../models/Client.model');
const Drug = require('../models/Drug.model');

module.exports.clientController = {
  addClient: async (req, res) => {
    const { name } = req.body;
    try {
      await Client.create({
        name
      });
      res.json(`Добавлен пользователь ${name}`);
    } catch (e) {
      res.json(e);
    }
  },
  addToCart: async (req, res) => {
    const { id, drugid } = req.params;
    try {
      const drug = await Drug.findById(drugid);
      const client = await Client.findById(id);
      if ((drug.needRecipe && client.recipes.includes(drugid)) || !(drug.needRecipe)) {
        const cart = await Client.findByIdAndUpdate(id,{
          $inc : { "cart.sum" : drug.price },
          $push : { "cart.drugs" : drug}
        }, {new: true})
        res.json(cart)
      } else {
        res.json('Нет рецепта')
      }
    } catch (e) {
      res.json(e);
    }
  },
  removeFromCart: async (req, res) => {
    const { id, drugid } = req.params;
    try {
      const drug = await Drug.findById(drugid);
      const cart = await Client.findByIdAndUpdate(id,{
        $inc : { "cart.sum" : -drug.price },
        $pull : { "cart.drugs" : drug._id}
      }, {new: true})
      res.json(cart)
    } catch (e) {
      res.json(e);
    }
  },
  buyCart: async (req, res) => {
    const { id } = req.params;
    try {
      const client = await Client.findById(id);
      if (client.money < client.cart.sum) {
        res.json('Недостаточно денег')
      } else {
        client.money -= client.cart.sum;
        client.cart.drugs = [];
        client.save()
        res.json('Лекарства куплены. Корзина пуста')
      }
    } catch (e) {
      res.json(e);
    }
  },
  cleanCart: async (req, res) => {
    const { id } = req.params;
    try {
      const client = await Client.findById(id);
      client.cart.sum = 0;
      client.cart.drugs = [];
      client.save();
    } catch (e) {
      res.json(e);
    }
  },
  topUpMoney: async (req, res) => {
    const { id } = req.params;
    try {
      await Client.findByIdAndUpdate(id, {
        money: req.body.topup
      });
    } catch (e) {
      res.json(e);
    }
  }
}
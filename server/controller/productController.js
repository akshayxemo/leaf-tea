const Product = require("../models/product.model");
const mongoose = require("mongoose");
const { AddBase64Unit } = require("../lib/utils");

module.exports = {
  GET: {
    AllProducts: async (req, res) => {
      try {
        const product = await Product.find({});
        const productWithBase64Image = product.map((product) => {
          return { ...product._doc, image: AddBase64Unit(product.image) };
        });
        return res.status(200).json(productWithBase64Image);
      } catch (error) {
        return res.status(400).json({ error: error });
      }
    },
    ByID: async (req, res) => {
      try {
        console.log("hit");
        const id = req.params.id;
        const response = await Product.findById(id);
        const product = {
          ...response._doc,
          image: AddBase64Unit(response.image),
        };
        return res.status(200).json(product);
      } catch (error) {
        return res.status(400).json({ error: error });
      }
    },
  },
};

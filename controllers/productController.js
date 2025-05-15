// controllers/productController.js
const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  const { name, price, description, category, canteen } = req.body;
  try {
    const newProduct = new Product({ name, price, description, category, canteen });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProducts, addProduct };

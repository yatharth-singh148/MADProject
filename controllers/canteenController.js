// controllers/canteenController.js
const Canteen = require('../models/Canteen');

const getCanteens = async (req, res) => {
  try {
    const canteens = await Canteen.find();
    res.json(canteens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCanteen = async (req, res) => {
  const { name, location } = req.body;
  try {
    const newCanteen = new Canteen({ name, location });
    await newCanteen.save();
    res.status(201).json(newCanteen);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getCanteens, addCanteen };
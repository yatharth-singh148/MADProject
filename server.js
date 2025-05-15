const express = require('express');
const dotenv = require('dotenv');
dotenv.config();  // Load environment variables as early as possible
console.log('Mongo URI:', process.env.MONGO_URI);
const mongoose = require('mongoose');
const canteenRoutes = require('./routes/canteenRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/canteens', canteenRoutes);
app.use('/api/products', productRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

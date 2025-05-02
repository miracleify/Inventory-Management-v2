// src/app.js
const express = require('express');
const { sequelize } = require('../config/database');
require('dotenv').config();

// Import routes
const productRoutes  = require('./routes/productRoutes');
const salesRoutes    = require('./routes/salesRoutes');
const authRoutes     = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Import models (so Sequelize registers them)
require('./modules/product');
require('./modules/sales');
require('./modules/user');
// (and category if you have it)

const app = express();
app.use(express.json());

// Mount routes
app.use('/api/products',   productRoutes);
app.use('/api/sales',      salesRoutes);
app.use('/api/auth',       authRoutes);
app.use('/api/categories', categoryRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('✅ Welcome to the Inventory Management System API!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

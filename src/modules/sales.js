// src/modules/sales.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');
const Product = require('./product');

const Sale = sequelize.define('Sale', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'sales',
  timestamps: false,
});

Product.hasMany(Sale, { foreignKey: 'productId', onDelete: 'CASCADE' });
Sale.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Sale;

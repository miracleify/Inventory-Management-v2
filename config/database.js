// config/database.js
require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('./config');

// Initialize Sequelize
const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    port: config.dbPort,
    dialect: 'postgres',
    logging: false,
    dialectOptions: config.dbSSL === 'true'
      ? { ssl: { require: true, rejectUnauthorized: false } }
      : {}
  }
);

sequelize
  .authenticate()
  .then(() => console.log('✅ Connected to Postgres via Sequelize'))
  .then(() => sequelize.sync({ alter: true }))
  .then(() => console.log('✅ Database & tables synced'))
  .catch(err => console.error('❌ DB connection/sync error:', err));

module.exports = {
  sequelize,
  Sequelize
};

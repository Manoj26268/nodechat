const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('chatbotsdb', null, null, {
  dialect: 'sqlite',
  storage: 'chatbotsdb.sqlite', // SQLite database file name
});

module.exports = sequelize;
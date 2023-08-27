// Entities/User.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Database/database'); // Adjust the path

const Chatbot = require('./Chatbot'); // Import Chatbot model
const EndUser = require('./EndUser'); // Import EndUser model

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // ... other fields for User
  },
  {
    sequelize,
    modelName: 'User',
  }
);


module.exports = User;

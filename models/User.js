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
    // ChatbotId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true, // Allow null since it's a one-to-many relationship
    //   references: {
    //     model: Chatbot, // This is the Chatbot model
    //     key: 'id',      // This is the primary key of the Chatbots table
    //   },
    // },
    // ... other fields for User
  },
  {
    sequelize,
    modelName: 'User',
  }
);

// User.hasMany(Chatbot,{ foreignKey: 'ChatbotId' });
module.exports = User;

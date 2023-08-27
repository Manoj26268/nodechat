// Entities/Conversation.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Database/database'); // Adjust the path

const Chatbot = require('./Chatbot'); // Import Chatbot model
const EndUser = require('./EndUser'); // Import EndUser model

class Conversation extends Model {}

Conversation.init(
  {
    // ... fields for Conversation
    text: {
      type: DataTypes.TEXT,
      allowNull: true, // Allow storing text in the conversation
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Conversation',
  }
);


module.exports = Conversation;

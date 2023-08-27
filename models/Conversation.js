// Entities/Conversation.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Database/database'); // Adjust the path

const Chatbot = require('./Chatbot'); // Import Chatbot model
const EndUser = require('./EndUser'); // Import EndUser model

class Conversation extends Model {}

Conversation.init(
  {
    // ... fields for Conversation
    ChatbotId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Chatbot', 
        key: 'id',
      },
    },
    EndUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Conversation',
  }
);


module.exports = Conversation;

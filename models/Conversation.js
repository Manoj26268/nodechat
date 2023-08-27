// Entities/Conversation.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Database/database'); // Adjust the path

const Chatbot = require('./Chatbot'); // Import Chatbot model
const EndUser = require('./EndUser'); // Import EndUser model

class Conversation extends Model {}

Conversation.init(
  {
    // ... fields for Conversation
  },
  {
    sequelize,
    modelName: 'Conversation',
  }
);


module.exports = Conversation;

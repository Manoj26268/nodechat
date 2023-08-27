// Entities/Chatbot.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Database/database'); // Adjust the path

const User = require('./User'); // Import User model
const Conversation = require('./Conversation'); // Import Conversation model

class Chatbot extends Model {}

Chatbot.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // UserId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: User, // This is the User model
    //     key: 'id',   // This is the primary key of the Users table
    //   },
    // },
    // ... other fields for Chatbot
  },

  {
    sequelize,
    modelName: 'Chatbot',
  }
);

// Chatbot.belongsTo(User, { foreignKey: 'UserId' });
module.exports = Chatbot;

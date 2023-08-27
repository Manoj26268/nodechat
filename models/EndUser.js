// Entities/EndUser.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../Database/database'); // Adjust the path

const Conversation = require('./Conversation'); // Import Conversation model

class EndUser extends Model {}

EndUser.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'EndUser',
  }
);


module.exports = EndUser;

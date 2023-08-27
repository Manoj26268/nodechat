// associations.js
const sequelize = require('../Database/database');
const User = require('./User');
const Chatbot = require('./Chatbot');
const Conversation = require('./Conversation');
const EndUser = require('./EndUser');

// Define Associations
User.hasMany(Chatbot);
Chatbot.belongsTo(User);

Chatbot.hasMany(Conversation);
Conversation.belongsTo(Chatbot);

Conversation.belongsTo(EndUser);
EndUser.hasMany(Conversation);

sequelize.sync({ force: false }).then(() => {
    console.log('Database synced');
  }).catch(error => {
    console.error('Error syncing database:', error);
  });
  

module.exports = {
    User,
    Chatbot,
    Conversation,
    EndUser
  };
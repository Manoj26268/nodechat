'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.addColumn('Conversations', 'ChatbotId', {
    type: Sequelize.INTEGER,
    references: {
      model: 'Chatbots', // This should match the table name of the Chatbot model
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  });
},

down: async (queryInterface, Sequelize) => {
  await queryInterface.removeColumn('Conversations', 'ChatbotId');
},
};

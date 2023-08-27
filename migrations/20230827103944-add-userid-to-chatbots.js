'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Chatbots', 'UserId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users', // This should match the table name of the Users model
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Chatbots', 'UserId');
  },
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn (
      `Scenarios`,
      `treasure`, {
        type: Sequelize.STRING
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn (`Scenarios`, `treasure`)
  }
};

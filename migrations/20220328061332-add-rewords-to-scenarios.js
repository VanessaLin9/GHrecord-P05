'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn (
      `Scenarios`,
      `reword`, {
        type: Sequelize.STRING
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn (`Scenarios`, `reword`)
  }
};

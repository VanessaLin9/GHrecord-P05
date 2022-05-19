'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.removeColumn ('Players', 'character')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn ('Players', 'character', {
      type: Sequelize.STRING
    } )
  }
};

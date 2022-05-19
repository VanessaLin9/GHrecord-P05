'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn ('Players', 'avatar')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn ('Players', 'avatar', {
      type: Sequelize.STRING
    } )
  }
};

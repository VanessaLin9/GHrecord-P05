'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn ('Players', 'character_id', {
      type: Sequelize.INTEGER,
      reference: {
        models: 'Characters',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn ('Players', 'character_id')
  }
};

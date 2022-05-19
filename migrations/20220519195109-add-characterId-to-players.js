'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn ('Players', 'CharacterId', {
      type: Sequelize.INTEGER,
      reference: {
        models: 'Characters',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn ('Players', 'CharacterId')
  }
};

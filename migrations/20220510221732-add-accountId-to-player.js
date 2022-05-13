'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Players', 'AccountId', {
      type: Sequelize.INTEGER,
      reference: {
        models: 'Accounts',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn ('Players', 'AccountId')
  }
};

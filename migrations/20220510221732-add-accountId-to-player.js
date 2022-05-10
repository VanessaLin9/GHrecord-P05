'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Players', 'accountId', {
      type: Sequelize.INTEGER,
      reference: {
        models: 'Accounts',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn ('Players', 'accountId')
  }
};

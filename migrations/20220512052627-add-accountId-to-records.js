'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Records', 'AccountId', {
      type: Sequelize.INTEGER,
      reference: {
        models: 'Accounts',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Records', 'AccountId')
  }
};

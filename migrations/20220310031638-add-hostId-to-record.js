'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Records', 'PlayerId', {
      type: Sequelize.INTEGER,
      reference: {
        models: 'Players',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Records', 'PlayerId')
  }
};

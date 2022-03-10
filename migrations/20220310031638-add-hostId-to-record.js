'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Records', 'HostId', {
      type: Sequelize.INTEGER,
      reference: {
        model: 'Players',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Records', 'HostId')
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Records', 'ScenarioId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        models: 'Scenarios',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Records', 'ScenarioId')
  }
};

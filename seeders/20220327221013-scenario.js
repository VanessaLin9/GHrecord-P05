'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Scenario', [{
      name:'Black Barrow+',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Barrow Lair+',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Inox Encampment',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Crypt of the Damned+',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Ruinous Crypt+',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Decaying Crypt+',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Vibrant Grotto',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Gloomhaven Warehouse',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Diamond Mine',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Plane of Elemental Power',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Gloomhaven Square A',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Gloomhaven Square B',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name:'Template of the Seer',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Scenario', null, {})
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Players', [{
      name:'坦克',
      character_id:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    }, {
      name:'至至',
      character_id:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    },{
      name:'華歆sunny',
      character_id:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    },{
      name:'承恩',
      character_id:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    },{
      name:'立軒',
      character_id:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    },{
      name:'Xuan',
      character_id:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {})
  }
};

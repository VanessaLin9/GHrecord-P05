'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Players', [{
      name:'坦克',
      CharacterId:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    }, {
      name:'至至',
      CharacterId:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    },{
      name:'華歆sunny',
      CharacterId:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    },{
      name:'承恩',
      CharacterId:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    },{
      name:'立軒',
      CharacterId:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    },{
      name:'Xuan',
      CharacterId:'1',
      createdAt: new Date(),
      updatedAt: new Date(),
      AccountId: 1
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {})
  }
};

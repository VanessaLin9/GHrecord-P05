'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Players', [{
      name:'坦克',
      avatar:'https://media.comicbook.com/2019/09/cragheart-art-1186367.jpeg?auto=webp&width=564&height=306&crop=564:306,smart',
      character: 'Cragheart',
      createdAt: new Date(),
      updatedAt: new Date(),
      accountId: 1
    }, {
      name:'至至',
      avatar:'https://media.comicbook.com/2019/09/spellweaver-1186364.jpeg?auto=webp&width=655&height=425&crop=655:425,smart',
      character: 'Spellweaver',
      createdAt: new Date(),
      updatedAt: new Date(),
      accountId: 1
    },{
      name:'華歆sunny',
      avatar:'https://media.comicbook.com/2019/09/tinkerer-art-1186368.jpeg?auto=webp&width=564&height=329&crop=564:329,smart',
      character: 'Tinkerer',
      createdAt: new Date(),
      updatedAt: new Date(),
      accountId: 1
    },{
      name:'承恩',
      avatar:'https://media.comicbook.com/2019/09/mindthief-art-1186365.jpeg?auto=webp&width=450&height=450&crop=450:450,smart',
      character: 'Mindthief',
      createdAt: new Date(),
      updatedAt: new Date(),
      accountId: 1
    },{
      name:'立軒',
      avatar:'https://media.comicbook.com/2019/09/scoundrel-1186369.jpeg?auto=webp&width=655&height=400&crop=655:400,smart',
      character: 'Scoundrel',
      createdAt: new Date(),
      updatedAt: new Date(),
      accountId: 1
    },{
      name:'Xuan',
      avatar:'https://media.comicbook.com/2019/09/brute-art-1186362.jpeg?auto=webp&width=655&height=417&crop=655:417,smart',
      character: 'Brute',
      createdAt: new Date(),
      updatedAt: new Date(),
      accountId: 1
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {})
  }
};

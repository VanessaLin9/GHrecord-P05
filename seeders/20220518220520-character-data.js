'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert ('Characters', [{
    name:'Banner Spear',
    avatar:'https://imgur.com/O8j9wDg.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Beast Tyrant',
    avatar:'https://imgur.com/4epoyfN.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Berserker',
    avatar:'https://imgur.com/RCncbVv.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Blink Blade',
    avatar:'https://imgur.com/aTvSREY.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Boneshaper',
    avatar:'https://imgur.com/LkVK0Qu.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Brute',
    avatar:'https://imgur.com/W7fOBo3.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Cragheart',
    avatar:'https://imgur.com/bwGfMc6.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Demolitionist',
    avatar:'https://imgur.com/60icF60.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Doomstalker',
    avatar:'https://imgur.com/a/A7VonTm.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Elementalist',
    avatar:'https://imgur.com/r10fsol.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Geminate',
    avatar:'https://imgur.com/1bTC5Eu.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Mindthief',
    avatar:'https://imgur.com/xoNYTJX.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Nightshroud',
    avatar:'https://imgur.com/rDI7wt8.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Plagueherald',
    avatar:'https://imgur.com/wSeDjrZ.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Quartermaster',
    avatar:'https://imgur.com/Y3NRq99.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Red Guard',
    avatar:'https://imgur.com/2gxj1FT.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Sawbones',
    avatar:'https://imgur.com/2Ccfa4p.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Scoundrel',
    avatar:'https://imgur.com/yZS5swR.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Soothsinger',
    avatar:'https://imgur.com/DDUtEZI.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Spellweaver',
    avatar:'https://imgur.com/OrAG4Sp.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Summoner',
    avatar:'https://imgur.com/MEEZEr5.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Sunkeeper',
    avatar:'https://imgur.com/J6DEtWG.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'The Cephalophore',
    avatar:'https://imgur.com/Fcswfva.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Tinkerer',
    avatar:'https://imgur.com/VqiZNIC.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Voidwarden',
    avatar:'https://imgur.com/3wNGxLa.jpg',
    created_at: new Date(),
    updated_at: new Date(),
  }])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete ('Characters', null, {})
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert ('Characters', [{
    name:'Banner Spear',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/9/9d/CLASS-Bannerspear.png/revision/latest/scale-to-width-down/350?cb=20200530000043',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Beast Tyrant',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/8/8b/Vermling-Beast-Tyrant3.jpg/revision/latest/scale-to-width-down/350?cb=20180427192819',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Berserker',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/a/a1/Berserker-Art.png/revision/latest/scale-to-width-down/350?cb=20211012061957',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Blink Blade',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/e/e5/Blink_Blade.png/revision/latest/scale-to-width-down/335?cb=20200529172837',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Boneshaper',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/f/f7/EGEZ3CuUEAA_soV.jpeg/revision/latest/scale-to-width-down/350?cb=20200529154914',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Brute',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/5/5e/C8c73136e500578d8f0af236dbb31c08.jpg/revision/latest/scale-to-width-down/350?cb=20180915234820',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Cragheart',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/e/ec/Cragheart.jpg/revision/latest/scale-to-width-down/350?cb=20180608161138',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Demolitionist',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/6/6d/EGEZ3CuUYAAozQ7.jpg/revision/latest/scale-to-width-down/350?cb=20200529151843',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Doomstalker',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/a/ad/DoomstalkerArt.jpg/revision/latest/scale-to-width-down/350?cb=20180608195730',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Elementalist',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/6/69/Savvas-Elementalist1.jpg/revision/latest/scale-to-width-down/350?cb=20180427192700',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Geminate',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/9/9d/IMAGE-Class-Gemini.png/revision/latest/scale-to-width-down/334?cb=20200613001920',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Mindthief',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/7/73/Mindthief_Art.png/revision/latest/scale-to-width-down/350?cb=20211006220359',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Nightshroud',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/1/19/Alexandr-elichev-aesther-nightshroud.jpg/revision/latest/scale-to-width-down/350?cb=20180608205237',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Plagueherald',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/3/31/Harrower-Plagueherald.jpg/revision/latest/scale-to-width-down/350?cb=20180427192016',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Quartermaster',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/5/54/QuartermasterArt.png/revision/latest/scale-to-width-down/350?cb=20211009210628',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Red Guard',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/1/13/EGEZ3CvU8AEE5wf.jpeg/revision/latest/scale-to-width-down/350?cb=20200529154423',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Sawbones',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/3/37/Sawbones-Art.png/revision/latest/scale-to-width-down/350?cb=20211017082133',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Scoundrel',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/6/67/Human-Scoundrel2.jpg/revision/latest/scale-to-width-down/350?cb=20180427190914',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Soothsinger',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/9/9a/Soothsinger-Art.png/revision/latest/scale-to-width-down/350?cb=20211014071055',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Spellweaver',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/e/e7/Orchid-Spellweaver-731x1024.jpg/revision/latest/scale-to-width-down/350?cb=20180427185708',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Summoner',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/7/76/Aesther-Summoner.jpg/revision/latest/scale-to-width-down/350?cb=20180427191258',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Sunkeeper',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/9/96/Valrath-Lightbringer.jpg/revision/latest/scale-to-width-down/350?cb=20180427192356',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'The Cephalophore',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/d/d8/IMAGE-Class-Cephalophore.png/revision/latest/scale-to-width-down/350?cb=20200612233439',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Tinkerer',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/4/4e/Quatryl-Tinkerer1.jpg/revision/latest/scale-to-width-down/350?cb=20180427190706',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name:'Voidwarden',
    avatar:'https://static.wikia.nocookie.net/gloohaven/images/1/1a/Voidwarden-1.jpg/revision/latest/scale-to-width-down/350?cb=20200529171037',
    created_at: new Date(),
    updated_at: new Date(),
  }])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete ('Characters', null, {})
  }
};

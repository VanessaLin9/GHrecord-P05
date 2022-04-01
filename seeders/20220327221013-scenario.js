'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Scenarios', [{
      id: 4,
      name:'1. Black Barrow+',
      treasure: 'Random Side Scenario',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 14,
      name:'2. Barrow Lair+',
      treasure: '10g',
      reword: '10g each, +1 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 24,
      name:'3. Inox Encampment',
      treasure: 'Horned Helmet design',
      reword: '15g each, +1 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 34,
      name:'4. Crypt of the Damned+',
      treasure: 'Ring of Skulls design, trap',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 44,
      name:'5. Ruinous Crypt+',
      treasure: '15g',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 54,
      name:'6. Decaying Crypt+',
      treasure: 'Second Skin',
      reword: '5g each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 64,
      name:'7. Vibrant Grotto',
      treasure: 'None',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 74,
      name:'8. Gloomhaven Warehouse',
      treasure: 'Random Side Scenario',
      reword: '+2 reputation',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 84,
      name:'9. Diamond Mine',
      treasure: 'None',
      reword: '20g each, +1 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 94,
      name:'10. Plane of Elemental Power',
      treasure: 'Random Item Design',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 104,
      name:'11. Gloomhaven Square A',
      treasure: 'Chainmail',
      reword: '15g each, -2 reputation, +2 prosperity, Skullbane Axe design',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 114,
      name:'12. Gloomhaven Square B',
      treasure: 'Amulet of Life',
      reword: '+4 reputation, Skullbane Axe design',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 124,
      name:'13. Template of the Seer',
      treasure: '10 XP',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 134,
      name:'14. Frozen Hollow+',
      treasure: '20g',
      reword: 'Unlocks enhancement',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 144,
      name:'15. Shrine of Strength+',
      treasure: 'None',
      reword: '20 XP each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 154,
      name:'16. Mountain Pass+',
      treasure: 'Random Item Design',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 164,
      name:'17. Lost Island+',
      treasure: 'Random Side Scenario',
      reword: '25g each (additionally, the scenario is covered in extra gold pickups, good for getting money)',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 174,
      name:'18. Abandoned Sewers+',
      treasure: 'Random Item Design',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 184,
      name:'19. Forgotten Crypt+',
      treasure: '20g',
      reword: '+1 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 194,
      name:'20. Necromancer Sanctum',
      treasure: 'Skullbane Axe',
      reword: '20g each, +2 reputation, +1 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 204,
      name:'21. Infernal Throne',
      treasure: 'Random Side Scenario',
      reword: '50g each, +1 prosperity, new city event (78) which unlocks scenario 94.',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 214,
      name:'22. Temple of the Elements+',
      treasure: 'Trap',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 224,
      name:'23. Deep Ruins+',
      treasure: 'Trap, Fueled Falchion design',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 234,
      name:'24. Echo Chamber+',
      treasure: 'Random Side Scenario',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 244,
      name:'25. Icecrag Ascent+',
      treasure: 'Drakescale Helm',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 254,
      name:'26. Ancient Cistern+',
      treasure: ' Volatile Bomb',
      reword: '10g each, +1 reputation, +2 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 264,
      name:'27. Ruinous Rift+',
      treasure: 'None',
      reword: '100g worth of enhancements',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 274,
      name:'28. Outer Ritual Chamber',
      treasure: 'Random Item Design',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 284,
      name:'29. Sanctuary of Gloom',
      treasure: 'Black Knife',
      reword: '15XP each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 294,
      name:'30. Shrine of the Depths+',
      treasure: 'None',
      reword: '10g each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 304,
      name:'31. Plane of Night+',
      treasure: 'Robes of Summoning',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 314,
      name:'32. Decrepit Wood',
      treasure: 'None',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 324,
      name:'33. Savaas Armory',
      treasure: 'None',
      reword: 'Adds a new road event (66) and city event (75) if scenario 25 is also completed.',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 334,
      name:'34. Scorched Summit',
      treasure: 'Drakescale Armor',
      reword: '20g each, +2 reputation, +1 prosperity.',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 344,
      name:'35. Gloomhaven Battlements A ',
      treasure: 'Versatile Dagger',
      reword: '30g each, -5 reptuation, -2 prosperity, and adds a new city event (79) which has entirely negative outcomes.',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 354,
      name:'36. Gloomhaven Battlements B',
      treasure: 'Tower Shield',
      reword: '10g each, +4 reputation, and adds a new city event (78) which unlocks scenario 94',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 364,
      name:'37. Doom Trench+',
      treasure: 'Unlocks scenario 17',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 374,
      name:'38. Slave Pens+',
      treasure: 'Endurance Footwraps',
      reword: '+1 reputation',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 384,
      name:'39. Treacherous Divide+',
      treasure: 'Random Item Design',
      reword: '10XP each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 394,
      name:'40. Ancient Defense Network',
      treasure: 'Steam Armor',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 404,
      name:'41. Timeworn Tomb ',
      treasure: 'Trap',
      reword: '50g each, 25XP each, 2 perk points each, +2 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 414,
      name:'42. Realm of the Voice',
      treasure: 'Perk point',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 424,
      name:'43. Drake Nest+',
      treasure: 'Drakescale Boots',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 434,
      name:'44. Tribal Assault+',
      treasure: 'None',
      reword: '+2 reputation, unlocks Angry Face class',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 444,
      name:'45. Rebel Swamp',
      treasure: 'Random Item Design',
      reword: '20g each, -2 reputation',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 454,
      name:'46. Nightmare Peak+',
      treasure: '30g',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 464,
      name:'47. Lair of the Unseen Eye+',
      treasure: '15g',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 474,
      name:'48. Shadow Weald+',
      treasure: '30g',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 484,
      name:'49. Rebel Stand',
      treasure: 'Random Side Scenario',
      reword: '50g each, -2 reputation',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 494,
      name:'50. Ghost Fortress',
      treasure: 'None',
      reword: '+3 reputation, -2 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 504,
      name:'51. The Void',
      treasure: 'Star Earring',
      reword: '+5 reputation, +5 prosperity. Adds a new city event (81) and road event (69). Also you beat the campaign, yay! Have a cookie or something.',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 514,
      name:'52. Noxious Cellar',
      treasure: 'None',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 524,
      name:'53. Crypt Basement',
      treasure: 'Randon Item Design',
      reword: 'Staff of Xorn (automatically given to the Seeker. They cannot sell it)',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 534,
      name:'54. Palace of Ice',
      treasure: '25g',
      reword: 'Seeker retires. Note: Adds city event 59 and road event 59 into the deck instead of the normal events that are added on retirement.',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 544,
      name:'55. Foggy Thicket',
      treasure: 'None',
      reword: '10g (collective)',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 554,
      name:'56. Bandit Wood',
      treasure: 'Random Item Design',
      reword: '10g each, +2 reputation, retirement.',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 564,
      name:'57. Investigation',
      treasure: 'Splint Mail, Random Item Design',
      reword: '+1 reputation',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 574,
      name:'58. Bloody Shack',
      treasure: 'None',
      reword: '+2 reputation, retirement',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 584,
      name:'59. Forgotten Grove',
      treasure: 'None',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 594,
      name:'60. Alchemy Lab',
      treasure: 'None',
      reword: '+1 prosperity, retirement',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 604,
      name:'61. Fading Lookout ',
      treasure: 'None',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 614,
      name:'62. Pit of Souls',
      treasure: 'Random Item Design',
      reword: '10XP each, retirement',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 624,
      name:'63. Magma Pit',
      treasure: 'Magma Waders',
      reword: '15g each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 634,
      name:'64. Underwater Lagoon',
      treasure: 'Wave Crest',
      reword: '10XP each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 644,
      name:'65. Sulfur Mine',
      treasure: 'None',
      reword: 'Ancient Drill Design',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 654,
      name:'66. Clockwork Cove',
      treasure: '10g, Rocket Boots Design',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 664,
      name:'67. Arcane Library',
      treasure: '10XP',
      reword: 'Power Core',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 674,
      name:'68. Toxic Moor',
      treasure: 'Weighted Net',
      reword: '2 major healing potions',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 684,
      name:'69. Well of the Unfortunate',
      treasure: 'None',
      reword: '15g each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 694,
      name:'70. Chained Isle',
      treasure: 'Hooked Chain',
      reword: '+2 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 704,
      name:'71. Windswept Highlands',
      treasure: 'None',
      reword: '2 Major Power Potions',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 714,
      name:'72. Oozing Grove',
      treasure: 'None',
      reword: '+1 reputation, +1 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 724,
      name:'73. Rockslide Ridge',
      treasure: 'None',
      reword: '+1 reputation',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 734,
      name:'74. Wrecked Ship',
      treasure: 'Random Item Design',
      reword: '10g each, +1 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 744,
      name:'75. Overgrown Graveyard',
      treasure: 'Random item Design',
      reword: '60g each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 754,
      name:'76. Harrower Hive',
      treasure: '20g',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 764,
      name:'77. Vault of Secrets',
      treasure: 'None',
      reword: '5XP each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 774,
      name:'78. Sacrifice Pit',
      treasure: 'None',
      reword: '+3 reputation',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 784,
      name:'79. Lost Temple',
      treasure: 'Heart of the Betrayer',
      reword: '15g each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 794,
      name:'80. Vigil Keep',
      treasure: 'None',
      reword: '10XP each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 804,
      name:'81. Temple of the Eclipse',
      treasure: 'Helix Ring',
      reword: '10XP each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 814,
      name:'82. Burning Mountain',
      treasure: 'Helm of the Mountain, Mountain Hammer – you will be given the option to sacrifice one of these items or escape with both',
      reword: '+1 reputation (if an artifact is sacrificed), -1 reputation/-2 prosperity (if both artifacts are taken). Currently bugged and both options will result in the bad reword.',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 824,
      name:'83. Shadows Within',
      treasure: 'None',
      reword: '40g (collective)',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 834,
      name:'84. Crystalline Cave',
      treasure: 'Random Item Design',
      reword: 'Resonant Crystal, +1 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 844,
      name:'85. Sun Temple',
      treasure: 'None',
      reword: 'Orb of Dawn',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 854,
      name:'86. Harried Village',
      treasure: 'None',
      reword: '+2 reputation',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 864,
      name:'87. Corrupted Cover',
      treasure: 'Random Item Design',
      reword: '+1 reputation, +1 prosperity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 874,
      name:'88. Plane of Water',
      treasure: '1 perk point, 1 perk point',
      reword: 'Staff of Summoning',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 884,
      name:'89. Syndicate Hideout',
      treasure: 'Trap, trap, Orb of Twilight',
      reword: '50g (collective)',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 894,
      name:'90. Demonic Rift',
      treasure: 'Random Item Design',
      reword: 'Black Censor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 904,
      name:'91. Wild Melee',
      treasure: 'None',
      reword: '2 perk points each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 914,
      name:'92. Back Alley Brawl',
      treasure: 'None',
      reword: '10g each, -3 reputation',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 924,
      name:'93. Sunken Vessel',
      treasure: 'Doomed Compass',
      reword: '10XP each',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 934,
      name:'94. Vermling Nest',
      treasure: 'None',
      reword: 'None',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 944,
      name:'95. Payment Due',
      treasure: 'None',
      reword: 'Skull of Hatred',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Scenarios', null, {})
  }
};

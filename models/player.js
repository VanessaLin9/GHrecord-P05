'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsTo(models.Account)
      Player.hasMany(models.Record, { foreignKey: 'PlayerId' })
      Player.belongsTo(models.Character, {foreignKey: 'character_id'})
      // many to many
      Player.belongsToMany(models.Record, {
        through: models.Participant,
        foreignKey: 'player_id',
        as: 'ParticipantRecords'
      })
    }
  }
  Player.init({
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    character: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};
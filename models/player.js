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
      Player.hasMany(models.Record, { foreignKey: 'PlayerId' })
      // many to many
      Player.belongsToMany(models.Record, {
        through: models.Participant,
        foreignKey: 'playerId',
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
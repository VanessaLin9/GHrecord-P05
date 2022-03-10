'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Record.belongsTo(models.Player)
      Record.belongsTo(models.Scenario)
      // many to many
      Record.belongsToMany(models.Player, {
        through: models.Participant,
        foreignKey: 'recordId',
        as: 'ParticipantPlayers'
      })
    }
  }
  Record.init({
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};
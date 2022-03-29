const db = require('../models')
const Player = db.Player
const Scenario = db.Scenario

const recordController = {
  getHomePage: (req, res, next) => {
    return Promise.all([
      Player.findAll({raw:true}),
      Scenario.findAll({raw:true})
    ])
    .then(([players, scenarios]) => {
       res.render('index', {players, scenarios})
    })
  },
  addRecord: (req, res) => {
    return res.render('index')
  }
}
module.exports = recordController
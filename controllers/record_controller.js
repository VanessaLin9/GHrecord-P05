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
    console.log('post!')
    console.log(req.body)
    let participant = req.body.participants
    let participantList = participant.split(',')
    console.log(participantList)
    return res.redirect('/host')
  }
}
module.exports = recordController
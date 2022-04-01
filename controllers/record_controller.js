const db = require('../models')
const Player = db.Player
const Scenario = db.Scenario
const Record = db.Record

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
    console.log(req.body.hostId)
    let participant = req.body.participants
    let participantList = participant.split(',')
    console.log(participantList)
    return Record.create({
      date: req.body.date,
      PlayerId: req.body.hostId,
      ScenarioId: req.body.scenarioId, 
    })
    .then((record) =>{
      console.log(record.id)
      res.redirect('/host')
    })
    .catch(err => {
      console.log(err)
    }) 
  }
}
module.exports = recordController
const db = require('../models')
const Player = db.Player
const Scenario = db.Scenario
const Record = db.Record

const recordController = {
  getHomePage: (req, res, next) => {
    return Promise.all([
      Player.findAll({raw:true}),
      Scenario.findAll({raw:true}),
      Record.findAll({
        attributes: ['id','date', 'createdAt', 'playerId', 'ScenarioId'],
        limit: 3,
        order: [['createdAt', 'DESC']],
        raw:true, nest:true
      })
    ])
    .then(([players, scenarios, records]) => {
       res.render('index', {players, scenarios, records})
    })
    .catch(err=>{ console.log(err)})
  },
  addRecord: (req, res) => {
    console.log('post!')
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
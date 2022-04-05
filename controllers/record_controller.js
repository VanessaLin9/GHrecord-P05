const db = require('../models')
const Player = db.Player
const Scenario = db.Scenario
const Record = db.Record
const Participant = db.Participant

const recordController = {
  getHomePage: (req, res, next) => {
    return Promise.all([
      Player.findAll({
        attributes: ['id', 'name'],
        raw:true}),
      Scenario.findAll({
        attributes: ['id', 'name'],
        raw:true}),
      Record.findAll({
        attributes: ['id','date', 'createdAt', 'playerId', 'ScenarioId'],
        limit: 3,
        order: [['createdAt', 'DESC']],
        include: [Player, Scenario],
        raw:true, nest:true
      })
    ])
    .then(([players, scenarios, records]) => {
     
      const recentRecord = records.map(record => ({
        id:record.id,
        date: record.date,
        hostName: record.Player.name,
        scenarioName: record.Scenario.name,
      }))
     
       res.render('index', {players, scenarios, recentRecord})
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
      let newList = participantList.map(participant=> ({
        player_id: participant,
        record_id: record.id
      }))
      return Participant.bulkCreate(newList)
    })
    .then(res.redirect('/host'))
    .catch(err => {
      console.log(err)
    }) 
  },
  getRecordPage: (req,res) => {
    res.render('record')
  }
}
module.exports = recordController
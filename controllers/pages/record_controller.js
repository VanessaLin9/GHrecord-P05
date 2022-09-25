const db = require('../../models')
const Player = db.Player
const Scenario = db.Scenario
const Record = db.Record
const Participant = db.Participant

const recordController = {
  getHomePage: (req, res, next) => {
    return Promise.all([
      Player.findAll({
        where: {accountId: req.user.id},
        attributes: ['id', 'name'],
        raw:true}),
      Scenario.findAll({
        attributes: ['id', 'name'],
        raw:true}),
      Record.findAll({
        where: {accountId: req.user.id},
        attributes: ['id','date', 'createdAt', 'playerId', 'ScenarioId'],
        limit: 3,
        order: [['createdAt', 'DESC']],
        include: [{model:Player, attributes:['id', 'name']}, Scenario],
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
  addRecord: async(req, res) => {
    let userId = req.user.id
    console.log(userId)
    let participant = req.body.participants
    let participantList = participant.split(',')
    console.log(participantList)
    try {
      Record.create({
      date: req.body.date,
      PlayerId: req.body.hostId,
      ScenarioId: req.body.scenarioId,
      AccountId: userId 
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
    } catch (error) {
      console.log(error)
      res.render('record', { Error })
    }},
  getRecordPage:  async(req,res) => {
    try {
      await Record.findAll({
        where: {accountId: req.user.id},
        attributes: ['id','date', 'createdAt', 'playerId', 'ScenarioId'],
        order: [['createdAt', 'DESC']],
        include: [{model:Player, attributes:['id', 'name']}, Scenario],
        raw:true, nest:true
      })
      .then(records => {
        const recordList = records.map(record => ({
          id:record.id,
          date: record.date,
          hostName: record.Player.name,
          scenarioName: record.Scenario.name,
        }))
        res.render('record', {recordList})
      })
    } catch (error) {
      console.log(error)
      res.render('record', { Error })
    }
  },
  getEditRecord: (req, res) => {
    let id = req.params.id
    return Promise.all([
      Record.findByPk(id, {
        attributes: ['id','date', 'createdAt', 'playerId', 'ScenarioId'],
        include: [{model:Player, attributes:['id', 'name']}, {model:Scenario, attributes:['id', 'name']}],
        raw:true, nest: true
      }),
      Player.findAll({
        attributes: ['id', 'name'],
        raw:true, nest: true
      }),
      Scenario.findAll({
        attributes: ['id', 'name'],
        raw:true, nest: true
       })
    ])
    .then(([record, player, scenarios]) => {
      return res.render('editRecord',{record, player, scenarios })
    })
    .catch(err => {
       console.log(err)
     })
  },
  deleteRecord: (req, res) => {
    console.log(req.params.id)
    return Record.findByPk(req.params.id)
    .then((record) => {
      record.destroy()
    })
    .then(res.redirect('/records'))
  }
}
module.exports = recordController
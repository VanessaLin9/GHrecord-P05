const db = require('../../models')
const Player = db.Player
const Scenario = db.Scenario
const Record = db.Record
const Participant = db.Participant

const recordController = {
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
        return res.json({recordList})
      })
    } catch (error) {
      console.log(error)
      res.render('record', { Error })
    }
  },
}
module.exports = recordController
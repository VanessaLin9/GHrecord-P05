const {Player} = require('../models')
const recordController = {
  getHomePage: (req, res, next) => {
    Player.findAll({
      raw:true
    })
    .then(players => 
      // {players = players.map(d => ({
      //   ...d.dataValues
      //   Id: d.Id.dataValues,
      // }))
       res.render('index', {players})
    )
  },
  addRecord: (req, res) => {
    return res.render('index')
  }
}
module.exports = recordController
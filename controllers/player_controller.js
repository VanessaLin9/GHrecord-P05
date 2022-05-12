const db = require('../models')
const Player = db.Player

const playerController = {
  getPlayerList: (req, res) => {
    Player.findAll({
      where: {accountId: req.user.id},
      raw: true, nest: true
    })
    .then( (players) => {
      console.log(req.user)
      return res.render ('players', {players})
    })
    
  },
}
module.exports= playerController
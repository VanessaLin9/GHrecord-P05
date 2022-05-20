const db = require('../models')
const Player = db.Player
const Character = db.Character

const playerController = {
  getPlayerList: async(req, res) => {
    try{
      await Player.findAll({
      where: {accountId: req.user.id},
      attributes:['id', 'name'],
      include: [Character],
      raw: true, nest: true
    })
    .then( (players) => {
      console.log(players)
      return res.render ('players', {players})
    })} catch(error) {
      console.log(error)
      res.render('record', { Error })
    }
  },
}
module.exports= playerController
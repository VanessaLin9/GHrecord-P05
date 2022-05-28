const db = require('../models')
const Player = db.Player
const Character = db.Character

const playerController = {
  getPlayerList: async(req, res) => {
    return Promise.all([
      Player.findAll({
      where: {accountId: req.user.id},
      attributes:['id', 'name'],
      include: [Character],
      raw: true, nest: true
      }),
      Character.findAll({})
    ]) 
    .then(([players, characters]) => {
      console.log(players)
      return res.render ('players', {players, characters})
    }) 
    .catch(error => { console.log(error)})
  },
  editPlayer: (req, res) => {
    let id = req.params.id
    return Promise.all ([
      Player.findByPk(id, {
        attributes: ['id', 'name'],
        include: [Character],
        raw:true, nest: true
      }),
      Character.findAll({
        attributes: ['id', 'name', 'avatar'],
        raw:true, nest: true
      })
    ]) 
      .then (([player, characters]) => {
        return res.render('editPlayer', {player, characters})
      })
     .catch(err => {
       console.log(err)
     })
  }
}
module.exports= playerController
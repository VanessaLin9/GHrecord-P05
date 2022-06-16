const db = require('../../models')
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
      Character.findAll({
        attributes:['id', 'name', 'avatar'],
      })
    ]) 
    .then(([players, characters]) => {
      return res.json ({players, characters})
    }) 
    .catch(error => { console.log(error)})
  },
}
module.exports = playerController
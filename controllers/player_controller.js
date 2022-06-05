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
      // console.log(players)
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
  },
  postEditPlayer: async(req, res) => {
    let id = req.params.id
    let { characterId, playerName } = req.body
    console.log("id=", id)
    console.log(req.body)
    try {
      await Player.findByPk(id, {
        attributes: ['id', 'name', 'character_id'],
      })
      .then ((player) => {
        // console.log(player)
        if (!player) {
          console.log('error: !player')
          return redirect ('players')
        }
        console.log(characterId)
        return player.update({
          name: playerName,
          character_id: characterId
        })
       
      })
      .then (()=> {
         res.redirect ('/players')
      })
    } catch (error){
      console.log(error)
    } 
  },
  addPlayerPage: (req, res) => {
    Character.findAll({
      attributes: ["id", "name"],
      raw: true, nest: true
    })
    .then (characters => {
      return res.render ('addPlayer', {characters})
    }) 
  },
  postAddPlayer: async(req, res) => {
    let userId = req.user.id
    let { characterId, playerName } = req.body
    try {
      await Player.findOrCreate({
        attributes: ['id', 'name', 'character_id', 'AccountId'],
        where: {
          name: playerName,
          character_id: characterId,
          AccountId: userId
        }
      })
      .then(() => {
        return res.redirect('/players')
      })
    } catch (error) {
      console.log(error)
      res.render('/index', { Error })
    }
  }
}
module.exports= playerController
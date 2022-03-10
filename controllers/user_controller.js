const bcrypt = require('bcryptjs') //載入 bcrypt
const db = require('../models')
const { Account } = db
const userController = {
  signUpPage: (req, res) => {
    res.render('signup')
  },
  signUp: (req, res) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => Account.create({
        account: req.body.account,
        password: hash
      }))
      .then(() => {
        res.redirect('/signin')
      })
  }
}
module.exports = userController
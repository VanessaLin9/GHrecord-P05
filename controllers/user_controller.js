const bcrypt = require('bcryptjs') //載入 bcrypt
const db = require('../models')
const { Account } = db
const userController = {
  signUpPage: (req, res) => {
    res.render('signup')
  },
  signUp: (req, res, next) => {
    if (req.body.password !== req.body.passwordCheck) throw new Error('Passwords do not match!')

    Account.findOne({ where: { account: req.body.account } })
      .then(user => {
        if (user) throw new Error('Account already exists!') 
        return bcrypt.hash(req.body.password, 10) // 前面加 return
      })
      .then(hash => Account.create({  //上面錯誤狀況都沒發生，就把使用者的資料寫入資料庫
        account: req.body.account,
        password: hash
      }))
      .then(() => {
        req.flash('success_messages', '成功註冊帳號！') //並顯示成功訊息
        res.redirect('/signin')
      })
  },
  signInPage: (req, res) => {
    res.render('signin')
  },
  signIn: (req, res) => {
    req.flash('success_messages', '成功登入！')
    res.redirect('/host')
  },
  logout: (req, res) => {
    req.flash('success_messages', '登出成功！')
    req.logout()
    res.redirect('/signin')
  }
}
module.exports = userController
const express = require('express')
const exphbs = require('express-handlebars')
const flash = require('connect-flash')
const session = require('express-session')
const { pages, apis } = require('./routes')
const app = express()
const methodOverride = require('method-override')
const passport = require('./config/passport')
const { getUser } = require('./helpers/auth-helpers')
const SESSION_SECRET = 'secret'

const PORT = process.env.PORT || 3000
const bcrypt = require('bcryptjs')


app.use(express.static('public'))
app.engine('handlebars', exphbs({defaultLayout: 'main', helpers: require('./helpers/handlebars-helpers')}))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true })) //使用express內建的body-parser
app.use(methodOverride('_method'))


app.use(session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash()) // 掛載套件
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages') 
  res.locals.error_messages = req.flash('error_messages') 
  res.locals.user = getUser(req)
  next()
})
app.use('/apis', apis)
app.use(pages)

app.listen(PORT, ()=> {
  console.log(`Express is running on http://localhost${PORT}`)
})

module.exports = app
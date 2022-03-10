const express = require('express')
const routes = require('./routes')
const app = express()
const methodOverride = require('method-override')

const PORT = 3000
const bcrypt = require('bcryptjs')

const exphbs = require('express-handlebars')

app.use(express.static('public'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true })) //使用express內建的body-parser
app.use(methodOverride('_method'))

app.use(routes)

app.listen(PORT, ()=> {
  console.log(`Express is running on http://localhost${PORT}`)
})

module.exports = app
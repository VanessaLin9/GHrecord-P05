const express = require('express')
const app = express()

const PORT = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req,res)=> {
  res.render('index')
})
app.get('/login', (req,res)=> {
  res.render('login')
})


app.listen(PORT, ()=> {
  console.log(`Express is running on http://localhost${PORT}`)
})
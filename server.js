const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database.js')
const app = express()

require('ejs')
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  database.getContacts((error, contacts) => {
    if (error) {
      response.status(500).render('error', {
        error: error,
      })
    } else {
      response.render('index', {
        contacts: contacts,
      })
    }
  })
})

app.get('/contacts/:id', (request, response) => {
  var id = request.params.id
  console.log(id);
})

app.use((request, response) => {
  response.status(404).render('not_found')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})

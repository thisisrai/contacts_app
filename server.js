const express = require('express')
const bodyParser = require('body-parser')
const database = require('./database.js')
const pgp = require('pg-promise')()
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

// app.get('/contacts/:id', (request, response) => {
//   var id = request.params.id
//   console.log(id);
//   //Need to use this id to search for specific person
// })

app.get('/contacts/new', (request, response) => {
  // var dataInput = request.body
  // console.log(request.body)
  response.render('search')
  //placeholder need to finish this route
})

app.post('/contacts/new', (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  const phone = request.body.phone;
  const street = request.body.street;
  const city = request.body.city;
  const state = request.body.state;
  const country = request.body.country;
  const zip = request.body.zip;
  const birthday = request.body.birthday;
  const website = request.body.website;
  database.addContacts([name, email, phone, street, city, state, country, zip, birthday, website])
  .then(() =>
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
  )
})

app.use((request, response) => {
  response.status(404).render('not_found')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})

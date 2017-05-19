const pg = require('pg')
const pgp = require('pg-promise')()
const connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/contacts`
const db = pgp(connectionString)
const client = new pg.Client(connectionString)
client.connect()

const query = function(sql, variables, callback){
  // console.log('QUERY ->', sql.replace(/[\n\s]+/g, ' '), variables)

  client.query(sql, variables, function(error, result){
    if (error){
      console.log('QUERY <- !!ERROR!!')
      console.error(error)
      callback(error)
    }else{
      console.log('QUERY <-', JSON.stringify(result.rows))
      callback(error, result.rows)
    }
  })
}

const getContacts = function(callback){
  query(`
    SELECT
      *
    FROM
      contacts
    ORDER BY
      name
  `, [], callback)
}

const addContacts = (contactInfo) => {
  return db.none('insert into contacts (name, email, phone, street, city, state, country, zip, birthday, website) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', contactInfo);
}


module.exports = {
  getContacts,
  addContacts,
}

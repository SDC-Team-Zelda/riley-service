const { Pool } = require('pg');

const pool = new Pool({
  user: 'power_user',
  password: 'pgpw',
  host: 'ec2-18-222-75-0.us-east-2.compute.amazonaws.com',
  port: '5432',
  database: 'sdc',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 6000,
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
})

exports.getListing = async function(id, callback) {
  try {
    // console.log('GET')
    const res = await pool.query(`SELECT * FROM listings WHERE id = ${id}`)
    // console.log('DONE')
    callback(null, res.rows[0])
  } catch(err) {
    callback(err, null)
  }
}

exports.postListing = async function(object, callback) {
  try {
    // console.log('POST: ', object)
    const text = 'INSERT INTO listings(title, description, photos) VALUES($1, $2, $3) RETURNING *';
    const values = Object.values(object)

    const res = await pool.query(text, values)
    // console.log(res.rows[0])
    callback(null, res.rows[0])
  } catch(err) {
    console.log(err.stack)
    callback(err.stack, null)
  }
}

exports.putListing = async function(id, object, callback) {
  try {

    let values = [];
    let keys = Object.keys(object);
    for (var key in object) {
      values.push(object[key])
    }
    // values = values.slice(0, -2);

    const text = `UPDATE listings SET description = $1 WHERE id = ${id} RETURNING *`;

    const res = await pool.query(text, values)
    // console.log(res.rows[0])
    callback(null, res.rows[0])
  } catch(err) {
    console.log(err.stack)
    callback(err.stack, null)
  }
}

exports.deleteListing = async function(id, callback) {
  try {
    const res = await pool.query(`DELETE FROM listings WHERE id = ${id}`)
    // console.log(res.rows[0])
    callback(null, res.rows[0])
  } catch(err) {
    console.log(err.stack)
    callback(err.stack, null)
  }
}

// module.exports = {
//   getListing: getListing,
//   postListing: postListing,
//   putListing: putListing,
//   deleteListing: deleteListing
// };
const cassandra = require('cassandra-driver');
const uuidv4  = require('uuid');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'sdc'
});

client.connect(function (err, res) {
  if(err) {console.log(err); }
  else {
    console.log('Cassandra connected')
  }
});


exports.getListing = async function(id, callback) {
  try {
    // console.log('GET')
    const res = await client.execute(`SELECT * FROM listings WHERE id = ${id}`)
    // console.log('DONE')
    callback(null, res.rows[0])
  } catch(err) {
    console.log(err)
    callback(err, null)
  }
}


exports.postListing = async function(object, callback) {
  try {
    // let photos = JSON.stringify(object.photos);
    const id = 10000003;
    let query = `INSERT INTO listings(id, title, description, photos) VALUES( ${id}, '${object.title}', '${object.description}', '${object.photos}' )`
    const res = await client.execute(query)
    callback(null, 'POST Success')
  } catch(err) {
    console.log(err)
    callback(err, null)
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
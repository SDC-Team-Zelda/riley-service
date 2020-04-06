const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['host1', 'host2'],
  localDataCenter: 'datacenter1'
});

client.connect(function (err) {
  assert.ifError(err);
});


exports.getListing = async function(id, callback) {
  try {
    // console.log('GET')
    const res = await client.execute(`SELECT * FROM listings WHERE id = ${id}`)
    // console.log('DONE')
    callback(null, res.first())
  } catch(err) {
    console.log(err)
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
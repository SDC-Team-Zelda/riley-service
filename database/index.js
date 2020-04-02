const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdcbnb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to sdcbnb!')
});

let listingSchema = new mongoose.Schema({
  listing_id: { type: Number, unique: true, dropDuos: true},
  photos: Array,
  title: String,
  description: String
})

let Listing = mongoose.model('Listing', listingSchema);

let getListing = (listingNumber, callback) => {
  Listing.
    find({listingNumber}).
    exec(callback)
}

module.exports.getListing = getListing;
module.exports.Listing = Listing;
module.exports = db;

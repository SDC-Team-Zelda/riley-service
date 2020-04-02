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
  photos: Array,
  title: String,
  description: String
})

let Listing = mongoose.model('Listing', listingSchema);

let getListing = (listingNumber, callback) => {
  let id = `ObjectId(${listingNumber})`
  Listing
    .findById(listingNumber)
    .exec(callback)

}

let postListing = (object, callback) => {
  Listing
    .create(object)
    .then((result) => {
      console.log('POST Success')
      callback()
    })
    .catch((err) => {
      console.log('POST Error: ', err)
    })
}

let putListing = (listingNumber, object, callback) => {
  Listing
  .findByIdAndUpdate({listingNumber}, object)
  .exec(callback)
}

let deleteListing = (listingNumber, callback) => {
  Listing
    .findByIdAndDelete({listingNumber})
    .exec(callback)
}

module.exports = {
  Listing: Listing,
  getListing: getListing,
  postListing: postListing,
  putListing: putListing,
  deleteListing: deleteListing
};
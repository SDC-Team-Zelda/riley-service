const faker = require('faker');
const fs = require('file-system');
const axios = require('axios');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const db = require('./index.js');

const {Listing} = require('./index.js');
const ACCESS_KEY = require('./config/unsplash.config.js')

mongoose.connect('mongodb://localhost/sdcbnb', {useNewUrlParser: true});

let seed = function() {
  console.log('Running seed script')
  axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY.accessKey}`, {
      params: {
        query: 'modern home'
      }
    })
    .then((response) => {

      // console.log(response.data);
      let photos = [];
      let photoGroup = [];
      response.data.results.map((result) => {
        photoGroup.push(result.urls.regular)
        if (photoGroup.length >= 5) {
          photos.push(photoGroup)
          photoGroup = [];
        }
      })

      return photos
    })
    .then((photos)=> {
      // console.log(JSON.stringify(photos, null, 2))
      let listings = photos.map((photoGroup) => {
        let listing = {
          listingNumber: faker.random.uuid(),
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          photos: photoGroup
        }
        return listing;
      })
      console.log(listings)
      return listings;

    })
    .then((listings) => {

    })
    .catch((err) => {
      console.log(err)
    })
}();


// let fakeData = seed()
// console.log(fakeData)


module.exports = seed;

// var seed = function() {
//   const s3Promises = [];
//   for (var i = 1; i <= 100; i++) {
//     let listing = {};
//     listing.listingNumber = i;
//     listing.title = faker.lorem.sentence();
//     listing.description = faker.lorem.paragraph();
//     listing.photos = [];
//     var params = {
//       Bucket: bucketName,
//       Prefix: `listing${i}/`
//     };
//     const s3Promise = s3.listObjectsV2(params).promise()
//       .then(data => {
//         for (var j = 1; j < data.Contents.length; j++) {
//           listing.photos.push(`https://fec-teamganon-photos.s3-us-west-1.amazonaws.com/${data.Contents[j].Key}`);
//         }
//         listingData.push(listing);
//       })
//       .catch(err => {
//         console.error(err, err.stack);
//       });

//     s3Promises.push(s3Promise);
//   }
//   return s3Promises;
// };

// const promises = seed();

// Promise.all(promises).then(() => {
//   Listing.create(listingData, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//     }
//   });
// });





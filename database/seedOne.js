const faker = require('faker');
const fs = require('file-system');
const axios = require('axios');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const db = require('./index.js');

const { Listing } = require('./index.js');
const ACCESS_KEY = require('./config/unsplash.config.js')

// console.log('>>>>>>>>', Listing)

let getPhotos = function() {
  console.log('Running seed script')
  axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY.accessKey}`, {
      params: {
        query: 'modern home',
        per_page: 5,
      }
    })
    .then((response) => {

      // console.log(response.data);
      let photos = [];
      let photoGroup = [];
      let number = Math.ceil(Math.random() * 5);
      response.data.results.map((result) => {
        photoGroup.push(result.urls.regular)

        if (photoGroup.length >= number) {
          photos.push(photoGroup)
          photoGroup = [];
          number = Math.ceil(Math.random() * 10);
        }
      })

      return photos
    })
    .then((photos)=> {
      // console.log(JSON.stringify(photos, null, 2))
      let listing = photos.map((photoGroup) => {
        let listing = {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          photos: photoGroup
        }
        return listing;
      })
      console.log(listing)
      return listing;

    })
    .then((listing) => {
      Listing.create(listing, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Success: Listing: ', result);
        }
      });
    })
    .catch((err) => {
      console.log(err)
    })
}

let result = getPhotos();
console.log(result)

module.exports.getPhotos = getPhotos;





const faker = require('faker');
const fs = require('file-system');
const axios = require('axios');
const Promise = require('bluebird');

const { Listing } = require('./index.js');
const ACCESS_KEY = require('./config/unsplash.config.js')


const writeFileAsync = Promise.promisify(fs.writeFile);

(function() {
  console.log('Running photo downloader script')
  axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY.accessKey}`, {
      params: {
        query: 'modern home',
        per_page: 1000,
      }
    })
    .then((res) => {

      // console.log(response.data);
      let photos = [];
      for (var i = 0; i < res.data.results.length; i++ ) {
        photos.push(res.data.results[i].urls.regular)
      }

      console.log(photos)

      return photos
    })
    .then((photos) => {
      return JSON.stringify(photos)
    })
    .then(writeFileAsync('./data/1000photos.json', data))
    .catch((err) => {
      console.log(err)
    })
})()

let result = getPhotos1000();
console.log(result)

module.exports.getPhotos = getPhotos;





const faker = require('faker');
const fs = require('file-system');
const axios = require('axios');
const Promise = require('bluebird');

const ACCESS_KEY = require('./config/unsplash.config.js')


const writeFileAsync = Promise.promisify(fs.writeFile);
const readFileAsync = Promise.promisify(fs.readFile);

const get30 = function(page) {
  console.log('Running photo downloader script')
  let padded = page.toString().padStart(4, '0')
  axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY.accessKey}`, {
      params: {
        query: 'modern home',
        page: page,
        per_page: 30,
      }
    })
    .then((res) => {

      console.log('total: ', res.data.total)
      console.log('total pages: ', res.data.total_pages)
      let photos = [];
      for (var i = 0; i < res.data.results.length; i++ ) {
        photos.push(res.data.results[i].urls.regular)
      }

      // console.log(photos)

      return photos
    })
    .then((photos) => {
      console.log(photos.length)
      return writeFileAsync(`database/data/${padded}.json`, JSON.stringify(photos))
    })
    .then((result) => {
      console.log('writeFileAsync: ', result)
    })
    .catch((err) => {
      console.log(err)
    })
}

for (var i = 0; i < 50; i++) {
    get30(i)
}
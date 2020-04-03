const fs = require('file-system');
const Promise = require('bluebird');
const download = require('image-downloader')

const readFileAsync = Promise.promisify(fs.readFile);

let parsed = readFileAsync('database/data/allPhotos.json', 'utf-8')
  .then((result) => {
    return JSON.parse(result)

  })
  .catch((err) => {
    console.log(err)
  })

Promise.all(parsed)
  .then((result) => {
    let all = [];

    for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < result[i].length; j++) {
        all.push(result[i][j])
      }
    }

    return all;

  })
  .then((all) => {
    let count = 1;
    let result = all.map((photoURL) => {
      count++
      var padded = count.toString().padStart(3, '0')
      download.image({
        url: photoURL,
        dest: `database/data/photos/photo-${padded}.jpg`                // Save to /path/to/dest/image.jpg
        })
      .catch((err) => {
        console.log(err)
      })
    })

    return result
  })
  .then((result) => {
    console.log('Saved to', result)  // Saved to /path/to/dest/image.jpg
  })
  .catch((err) => {
    console.log(err)
  })
const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('./database/data/sdcbnb_listings.tsv');
writeUsers.write('id\ttitle\tdescription\tphotos\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      const title = faker.lorem.sentence();
      const description = faker.lorem.paragraph();
      const photosArr = [];
      const photosQuantity = Math.floor(Math.random() * 6)
      for (var k = 0; k < photosQuantity.length; k++ ) {
        let padded = (Math.ceil(Math.random() * 1500)).toString().padStart(4, '0');
        photosArr.push(`https://sdc-jpgs.s3.us-east-2.amazonaws.com/photos/photo-${padded}.jpg`)
      }
      const photos = photosArr;
      const data = `${id}\t${title}\t${description}\t${photos}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  console.log('DONE')
  writeUsers.end();
});
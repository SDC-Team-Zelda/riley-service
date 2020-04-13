'use strict';

module.exports = {
  fakeListing
}

const faker = require('faker');

function fakeListing(userContext, events, done) {
  const title = faker.lorem.words();
  const description = faker.lorem.sentence() + ' ' + faker.lorem.sentence();
  const photosArr = [];
  const p = Math.floor(Math.random() * 5) + 1;
  for (var k = 0; k < p; k++ ) {
    let padded = (Math.ceil(Math.random() * 1500)).toString().padStart(4, '0');
    photosArr.push(`"https://sdc-jpgs.s3.us-east-2.amazonaws.com/photos/photo-${padded}.jpg"`)
  }

  const photos = '{' + photosArr.join(',') + '}';

  userContext.vars.title = title;
  userContext.vars.description = description;
  userContext.vars.photos = photos;

  return done();
}
const {getListing, postListing, putListing, deleteListing} = require('../database-Postgres/index.js');
const perf = require('execution-time')();


describe('Should run under 50ms', () => {
  test('when making GET request', () => {

    function callback(data) {
      try {
        const elapsed = perf.stop();
        expect(elapsed.time).toBeLessThanOrEqual(50)
        done();
      } catch (error) {
        done(error);
      }
    }

    perf.start();
    getListing(1, callback)

  })

  // test('when making POST request', () => {
  //   let startTime = process.hrtime();
  //   postListing(9999999, () => {
  //     let elapsed = parseHrtimeToSeconds(process.hrtime(startTime));
  //   })
  //   console.log(elapsed[0])
  //   expect(elapsed[0]).toBeLessThanOrEqual(50)
  // })

  // test('when making PUT request', () => {
  //   let startTime = process.hrtime();
  //   putListing(9999999, () => {
  //     let elapsed = parseHrtimeToSeconds(process.hrtime(startTime));
  //   })
  //   console.log(elapsed[0])
  //   expect(elapsed[0]).toBeLessThanOrEqual(50)
  // })

  // test('when making DELETE request', () => {
  //   let startTime = process.hrtime();
  //   deleteListing(9999999, () => {
  //     let elapsed = parseHrtimeToSeconds(process.hrtime(startTime));
  //   })
  //   console.log(elapsed[0])
  //   expect(elapsed[0]).toBeLessThanOrEqual(50)
  // })
})


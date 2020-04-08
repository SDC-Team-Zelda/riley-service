const combine = function() {
  let all = []

  for (var j = 0; j < 50; j++) {
    let paddedNum = j.toString().padStart(4, '0')
    all.push(readFileAsync(`database/data/${paddedNum}.json`, 'utf-8'))
  }
  Promise.all(all)
    .then((result) => {
      console.log(result)
      return writeFileAsync(`database/data/allPhotos.json`, result)

    })
  // console.log(all)
}

console.log(combine())
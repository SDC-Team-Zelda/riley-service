const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {getListing} = require('../database/index.js');
const cors = require('cors');

let app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/public/dist')));
// app.get('/', cors(), function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/public/dist/index.html'))
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/intro/:id', function (req, res) {
  var id = req.params.id;
  getListing(id, function(err, result) {
    if (err) {
      console.log('fail to get intro')
    } else {
      res.send(result)
    }
  });
});

app.get('/app.js', cors(), function (req, res) {
  res.sendFile(path.join(__dirname, '../client/public/dist/app.js'))
});

////////

app.post('/api/', cors(), (req, res) => {
  console.log('POST', res.body)
})

app.put('/api/', cors(), (req, res) => {
  console.log('PUT', res.body)
})

app.delete('/api/', cors(), (req, res) => {
  console.log('DELETE', res.body)
})

////////

let port = 3002;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

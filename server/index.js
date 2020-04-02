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


app.get('/app.js', cors(), function (req, res) {
  res.sendFile(path.join(__dirname, '../client/public/dist/app.js'))
});



app.get('/api/intro/:id', function (req, res) {
  var id = req.params.id;
  console.log('GET id: ', id)
  getListing(id, function(err, result) {
    if (err) {
      console.log('Error: GET');
      res.sendStatus(400);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

////////

app.post('/api/intro/:id', cors(), (req, res) => {
  console.log('POST id: ', id)
  var id = req.params.id;
  postListing(id, function(err, result) {
    if (err) {
      console.log('Error: POST')
      res.sendStatus(400)
    } else {
      res.sendStatus(201)
    }
  });
})

app.put('/api/intro/:id', cors(), (req, res) => {
  console.log('PUT', res.body)
  var id = req.params.id;
  putListing(id, function(err, result) {
    if (err) {
      console.log('Error: PUT')
      res.sendStatus(400)
    } else {
      res.sendStatus(200)
    }
  });
})

app.delete('/api/intro/:id', cors(), (req, res) => {
  console.log('DELETE', res.body)
  var id = req.params.id;
  deleteListing(id, function(err, result) {
    if (err) {
      console.log('Error: DELETE')
      res.sendStatus(204)
    } else {
      res.sendStatus(200)
    }
  });
})

////////

let port = 3002;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

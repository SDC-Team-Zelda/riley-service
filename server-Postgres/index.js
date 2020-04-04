const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {getListing, postListing, putListing, deleteListing} = require('../database-Postgres/index.js');
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



app.get('/api/intro/', function (req, res) {
  var id = req.query.id
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

app.post('/api/intro/', (req, res) => {
  console.log(req.body)
  postListing(req.body, function(err, result) {
    if (err) {
      console.log('Error: POST')
      res.sendStatus(400)
    } else {
      res.sendStatus(201)
      res.end
    }
  });
})

app.put('/api/intro/', (req, res) => {
  var id = req.query.id
  putListing(id, req.body, function(err, result) {
    if (err) {
      console.log('Error: PUT')
      res.sendStatus(400)
    } else {
      res.sendStatus(200)
    }
  });
})

app.delete('/api/intro/', cors(), (req, res) => {
  console.log('DELETE', req.query.id)
  var id = req.query.id;
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

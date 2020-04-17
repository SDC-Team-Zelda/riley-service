require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {getListing, postListing, putListing, deleteListing} = require('../database-Postgres/index.js');
const cors = require('cors');
const morgan = require('morgan');
const React = require ('react');
const ReactDOMServer = require ('react-dom/server');
const App = require('../client/src/components/App.jsx');
const compression = require('compression')

let app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public/dist')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('../client/public/dist/index.html');
  fs.readFile(indexFile, 'utf-8', (err, data) => {
    if (err) {
      console.error('readFile error', err);
      return res.status(500).send('Something went wrong...')
    }

    return res.send(
      data.replace('<div id="app"></div>', '<div id="app">${app}</div>')
    );
  });
});

app.get('/loaderio-93cffc9f82bef84e057f9e4feb3d4980.txt', cors(), function (req, res) {
  res.sendFile(path.join(__dirname, './client/public/dist/loaderio-93cffc9f82bef84e057f9e4feb3d4980.txt'))
});


app.get('/app.js', cors(), function (req, res) {
  res.sendFile(path.join(__dirname, './client/public/dist/app.js'))
});


app.get('/api/intro/', function (req, res) {
  var id = req.query.id
  getListing(id, function(err, result) {
    if (err) {
      res.sendStatus(400);
    } else {
      res.json(result);
    }
  });
});

////////

app.post('/api/intro/', (req, res) => {
  postListing(req.body, function(err, result) {
    if (err) {
      console.log('Error: POST')
      res.sendStatus(400)
    } else {
      res.end()
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
      res.end();
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
      res.end();
    }
  });
})

////////

const port = process.env.PORT || 3002;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

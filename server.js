const express = require('express');
var Twit = require('twit');
var config = require('./config');

const app = express();

var T = new Twit(config);


let result = {}; 
function getData(err, data, response) {
    return result;
}

app.get('/api/customers', (req,res) => {
    var params = {
        q: 'rainbow', 
        count: 2 
    };
    console.log('--- twitter api called ! ----');
    let result = {};
   T.get('search/tweets',params) .catch(function (err) {
    console.log('caught error', err.stack)
  })
  .then(function (result) {
    // `result` is an Object with keys "data" and "resp".
    // `data` and `resp` are the same objects as the ones passed
    // to the callback.
    // See https://github.com/ttezel/twit#tgetpath-params-callback
    // for details.

    // console.log('data---', result.data);
    // console.log('res ---', res);
    return res.json(result.data);
  });
   
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
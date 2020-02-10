const express = require('express');
var Twit = require('twit');
var config = require('./config');

const app = express();

var T = new Twit(config);

var params = {
    q: 'rainbow', 
    count: 2 
};

T.get('search/tweets',params, gotData);

function gotData(err, data, response) {
    //console.log(data);
}

app.get('/api/customers', (req,res) => {
    const customers = [
        {id:1, firstName: 'Anmol', lastName: 'Khandekar'},
        {id:2, firstName: 'Rajat', lastName: 'Patel'},
        {id:3, firstName: 'Anish', lastName: 'Ranjan'},
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
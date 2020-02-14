const express = require('express');
const env = require('dotenv')
var Twit = require('twit');

env.config();


const app = express();

var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });

 

app.get('/search', (req,res) => {
    var queryParameters =  req.query;
    console.log("query paramteres", queryParameters);
    var params = {
        q: queryParameters.hashtags, 
        count: queryParameters.count 
    };
    console.log('--- twitter api called ! ----');
    let result = {};
   T.get('search/tweets',params) .catch(function (err) {
    console.log('caught error', err.stack)
  })
  .then(function (result) {
    console.log(result.data.statuses);
    let data = result.data.statuses.map((status)=>{
      return  {
        id:status.id,
        created_at : status.created_at,
        text : status.text,
        retweets : status.retweet_count,
        favorites : status.favorite_count,
        followers : status.followers_count,
        name: status.user.name,
        handle: status.user.screen_name
    }
    });
    return res.json(data);
  });
   
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
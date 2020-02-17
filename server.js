const express = require('express');
const env = require('dotenv')
const Twit = require('twit');
const path = require('path');

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
    var params = {
        q: queryParameters.hashtags, 
        count: queryParameters.count 
    };
   T.get('search/tweets',params) .catch(function (err) {
    console.log('caught error', err.stack)
  })
  .then(function (result) {
    let data = result.data.statuses.map((status)=>{
      return  {
        id:status.id,
        created_at : status.created_at,
        text : status.text,
        retweets : status.retweet_count,
        favourites : status.user.favourites_count,
        followers : status.user.followers_count,
        name: status.user.name,
        handle: status.user.screen_name
    }
    });
    return res.json(data);
  });
   
});

if(process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
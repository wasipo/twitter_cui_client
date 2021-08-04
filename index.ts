
var Twitter = require('twitter');
import dotenv from "dotenv";

dotenv.config();

const client = new Twitter({
    consumer_key: process.env.CUSTOMER_KEY,
    consumer_secret: process.env.CUSTOMER_SECRETS,
    access_token_key: process.env.TOKEN,
    access_token_secret: process.env.TOKEN_SECRETS
});

const params = {screen_name: 'nodejs',count:2};

client.get('statuses/home_timeline', params, function(error: any, tweets: any, response: any) {
    if (!error) {
      console.log(tweets)
    } else {
      console.log('hoge');
    }
})

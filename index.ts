
var Twitter = require('twitter');
import dotenv from "dotenv";

dotenv.config();


var black   = '\u001b[30m';
var red     = '\u001b[31m';
var green   = '\u001b[32m';
var yellow  = '\u001b[33m';
var blue    = '\u001b[34m';
var magenta = '\u001b[35m';
var cyan    = '\u001b[36m';
var white   = '\u001b[37m';


const client = new Twitter({
    consumer_key: process.env.CUSTOMER_KEY,
    consumer_secret: process.env.CUSTOMER_SECRETS,
    access_token_key: process.env.TOKEN,
    access_token_secret: process.env.TOKEN_SECRETS
});

const params = {
    screen_name: 'nodejs',
    count:100,
    exclude_replies:true
};

client.get('statuses/home_timeline', params, function(error: any, tweets: any, response: any) {
    if (!error) {
        tweets.map((tweet: { user: { name: string, description: string}; text: string}) => {
            console.log(red + tweet.user.name);
            console.log(yellow + tweet.user.description);
            console.log(white + tweet.text);
        })
    } else {
      console.log('hoge');
    }
})

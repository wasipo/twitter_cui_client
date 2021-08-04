
import Twitter from 'twitter';
import dotenv from "dotenv";

dotenv.config();

const client = new Twitter({
    consumer_key: `${process.env.CUSTOMER_KEY}`,
    consumer_secret: `${process.env.CUSTOMER_SECRETS}`,
    access_token_key: `${process.env.TOKEN}`,
    access_token_secret: `${process.env.TOKEN_SECRETS}`
});

const params = {
    screen_name: 'nodejs',
    count:100,
    exclude_replies:true
};

const colors = {
    red: '\u001b[31m',
    green: '\u001b[32m',
    yellow: '\u001b[33m',
    magenta: '\u001b[35m',
    cyan: '\u001b[36m',
    white: '\u001b[37m',
};

client.get('statuses/home_timeline', params, function(error: any, tweets: any, response: any) {
    if (!error) {
        tweets.map((tweet: { user: { name: string, description: string}; text: string}) => {
            console.log(colors.magenta + tweet.user.name);
            console.log(colors.cyan + tweet.user.description);
            console.log(colors.white + tweet.text);
        })
    } else {
      console.log('error');
    }
})

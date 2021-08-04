
import Twitter from "twitter"
import dotenv from "dotenv";

const client = new Twitter({
    consumer_key: process.env.CUSTOMER_KEY,
    consumer_secret: process.env.CUSTOMER_SECRETS,
    access_token_key: process.env.TOKEN,
    access_token_secret: process.env.TOKEN_SECRETS
});


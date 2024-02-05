const express = require('express');
const http = require('http');
// const socketIo = require('socket.io');
const cors = require('cors');
const Twit = require('twit');

const app = express();
const server = http.createServer(app);
// const io = socketIo(server);
app.use(cors());

const twitterConfig = {
    consumer_key: '57uL4Tdrg5xs4wJ42PcpPLKGs',
    consumer_secret: 's6IH0tnmqffMix4suerrBuhkzOZGQYR7osVex4LST9sgSMuQqw',
    access_token: '1384480458243670024-CyT4pWZEz2bK8ndEp7nExlPzUC8CUo',
    access_token_secret: 'io6J6JtLZObcajMsC0rX8Mfao8UuNFm3us7bbjajKikZZ'
};

const twitter = new Twit(twitterConfig);

const stream = twitter.stream('statuses/filter', { track: '#' });

stream.on('tweet', (tweet) => {
    io.emit('tweet', tweet); 
    console.log('New tweet:', tweet.text);
});

const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
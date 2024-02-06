// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const Twitter = require('twitter');
// const cors = require('cors');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);
// app.use(cors());

// const twitterConfig = {
//     consumer_key: '57uL4Tdrg5xs4wJ42PcpPLKGs',
//     consumer_secret: 's6IH0tnmqffMix4suerrBuhkzOZGQYR7osVex4LST9sgSMuQqw',
//     access_token_key: '1384480458243670024-CyT4pWZEz2bK8ndEp7nExlPzUC8CUo',
//     access_token_secret: 'io6J6JtLZObcajMsC0rX8Mfao8UuNFm3us7bbjajKikZZ'
// };

// const client = new Twitter(twitterConfig); // Create Twitter client instance

// // Stream tweets
// client.stream('statuses/filter', { track: 'kenya' }, function(stream) {
//     stream.on('data', function(tweet) {
//         io.emit('tweet', tweet); // Send tweet to frontend
//     });

//     stream.on('error', function(error) {
//         console.error(error);
//     });
// });

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const Twitter = require('twitter');
require('dotenv').config();

// Load API keys and access tokens from environment variables
const client = new Twitter({
    consumer_key: '57uL4Tdrg5xs4wJ42PcpPLKGs',
    consumer_secret: 's6IH0tnmqffMix4suerrBuhkzOZGQYR7osVex4LST9sgSMuQqw',
    access_token_key: '1384480458243670024-CyT4pWZEz2bK8ndEp7nExlPzUC8CUo',
    access_token_secret: 'io6J6JtLZObcajMsC0rX8Mfao8UuNFm3us7bbjajKikZZ'
});

// Stream tweets based on keywords
const stream = client.stream('statuses/filter', { track: '#trend' });

stream.on('data', function(event) {
  console.log('Tweet received:', event.text);
  
  // Perform actions like retweeting or liking here
  // Example:
  // client.post('statuses/retweet', { id: event.id_str }, function(error, tweet, response) {
  //   if (!error) {
  //     console.log('Retweeted:', tweet.text);
  //   } else {
  //     console.error('Error retweeting:', error);
  //   }
  // });
});

stream.on('error', function(error) {
  console.error('Stream error:', error);
});

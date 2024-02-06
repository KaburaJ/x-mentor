const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const Twitter = require('twitter').default;
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(cors());

const twitterConfig = {
    consumer_key: '57uL4Tdrg5xs4wJ42PcpPLKGs',
    consumer_secret: 's6IH0tnmqffMix4suerrBuhkzOZGQYR7osVex4LST9sgSMuQqw',
    access_token_key: '1384480458243670024-CyT4pWZEz2bK8ndEp7nExlPzUC8CUo',
    access_token_secret: 'io6J6JtLZObcajMsC0rX8Mfao8UuNFm3us7bbjajKikZZ'
};

const client = new Twitter(twitterConfig);

io.on('connection', (socket) => {
    console.log('Client connected');
    
    client.stream('statuses/filter', { track: 'kenya' }, function(stream) {
        stream.on('data', function(tweet) {
            socket.emit('tweet', tweet); // Send tweet to frontend
        });

        stream.on('error', function(error) {
            console.error(error);
        });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

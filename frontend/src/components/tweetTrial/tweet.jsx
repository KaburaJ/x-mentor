// Install necessary package
// npm install socket.io-client

// In your ReactJS component
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Tweet = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('tweet', (newTweet) => {
      setTweets((prevTweets) => [newTweet, ...prevTweets]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Twitter Stream</h1>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>{tweet.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tweet;

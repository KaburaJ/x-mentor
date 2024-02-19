import React, { useState, useEffect } from 'react';
import './Base.css'; // Import CSS for styling
import fetchedTweets from '../../../Common/data/xdata.json';

const BaseComponent = () => {
  // State for search query, list of tweets, and filter option
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('all'); // Default filter option
  const [tweets, setTweets] = useState([]);

  // Function to fetch tweets data (mocked here)
  useEffect(() => {
    // Mapping fetched tweets to match the expected structure
    const mappedTweets = fetchedTweets.map((tweet, index) => ({
      id: index, // Use index as unique id
      author: '', // You can set author to an empty string or extract it from tweet text or other properties
      content: tweet.text,
      sentiment: '', // You can set sentiment based on some condition or leave it empty
    }));

    setTweets(mappedTweets);
  }, []); // Empty dependency array to run only once

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    // Here you can implement logic to filter tweets based on searchQuery
  };

  // Function to handle filter option change
  const handleFilterOptionChange = (event) => {
    setFilterOption(event.target.value);
    // Here you can implement logic to filter tweets based on selected filterOption
  };

  // Function to handle form submission (optional)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement logic to fetch tweets based on searchQuery
  };

  // Function to filter tweets based on filter option
  const filteredTweets = tweets.filter(tweet => {
    if (filterOption === 'all') {
      return true; // Display all tweets if filter option is 'all'
    } else {
      return tweet.sentiment === filterOption; // Display tweets based on selected sentiment
    }
  });

  return (
    <div className="base-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search tweets..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="filter-options">
        <label>
          Filter by sentiment:
          <select value={filterOption} onChange={handleFilterOptionChange}>
            <option value="all">All</option>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
            <option value="neutral">Neutral</option>
          </select>
        </label>
      </div>
      <div className="tweet-list">
        {filteredTweets.map((tweet) => (
          <div className={`tweet`} key={tweet.id}>
            <div className="tweet-content">
              <p className="author">{tweet.author}</p>
              <p className="content">{tweet.content}</p>
              {tweet.sentiment && <p className="sentiment">Sentiment: {tweet.sentiment}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseComponent;

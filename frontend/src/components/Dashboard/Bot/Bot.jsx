import React, { useState } from 'react';
import '../Bot/Bot.css'
import { FaAngleLeft, FaAngleRight, FaPaperPlane, FaRobot, FaSearch, FaUser } from 'react-icons/fa';


const ChatBotHelp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    setMessages([...messages, { text: inputText, type: 'user' }]);

    const botResponse = getBotResponse(inputText);
    setMessages([...messages, { text: botResponse, type: 'bot' }]);

    setInputText('');
  };

  const getBotResponse = (userMessage) => {
    return "I'm sorry to hear that you're dealing with negative comments on Twitter. Remember to focus on positive interactions, and consider using the mute or block features to manage negativity.";
  };

  const response = `However, based on the content alone, it appears to be neutral or possibly positive. The tweet is inquiring about the location of individuals who are developing next-generation educational technology startups in Kenya and Nigeria. The language used is neutral and does not express any overtly positive or negative sentiment. Therefore, it can be categorized as neutral or potentially positive, depending on the broader context or interpretation.`


  return (
    <>
      <div className="chat-bot-help-container">
        {/* <FaAngleLeft className='angle-icon'/> */}
        <div className='chats'>
        <div className="chat-box">
          <div className='user-query'>
            <FaUser className='user' />
            <h3>Tell me if this tweet is positive, negative o neutral...Where are the folks building next gen #edtech startups on this lane? #Kenya #Nigeria. Let’s pull them up - please RT.?</h3>
          </div>
          <div className='bot-response'>
            <FaRobot className='robot' />
            <p>{response}</p>
          </div>
        </div>
      </div>
      <div className="chat-box">
        <div className='user-query'>
          <FaUser className='user' />
          <h3>Tell me if this tweet is positive, negative o neutral...Where are the folks building next gen #edtech startups on this lane? #Kenya #Nigeria. Let’s pull them up - please RT.?</h3>
        </div>
        <div className='bot-response'>
          <FaRobot className='robot' />
          <p>{response}</p>
        </div>
      </div>
      <div className="chat-box">
        <div className='user-query'>
          <FaUser className='user' />
          <h3>Tell me if this tweet is positive, negative o neutral...Where are the folks building next gen #edtech startups on this lane? #Kenya #Nigeria. Let’s pull them up - please RT.?</h3>
        </div>
        <div className='bot-response'>
          <FaRobot className='robot' />
          <p>{response}</p>
        </div>
      </div>
      </div>
      <div className='search-bar'>
        <input type='text' placeholder='Message our bot...'></input>
        <FaPaperPlane className='search-icon' />
      </div>
    </>
  );
};

export default ChatBotHelp;

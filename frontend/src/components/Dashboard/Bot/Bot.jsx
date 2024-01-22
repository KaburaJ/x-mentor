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

  const response = `AI, or Artificial Intelligence, refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, understanding natural language, speech recognition, and visual perception. The goal of AI is to create machines or systems that can perform tasks intelligently, simulating human intelligence or even surpassing it in certain aspects.

  AI encompasses various subfields and approaches, including:
  
  1. **Machine Learning (ML):** A subset of AI that focuses on developing algorithms and models that enable machines to learn from data and make predictions or decisions without explicit programming.
  
  2. **Deep Learning:** A specialized form of machine learning that involves neural networks with multiple layers (deep neural networks). Deep learning has been particularly successful in tasks such as image and speech recognition.
  
  3. **Natural Language Processing (NLP):** The ability of machines to understand, interpret, and generate human language. NLP is used in applications such as language translation, chatbots, and sentiment analysis.
  
  4. **Computer Vision:** The ability of machines to interpret and make decisions based on visual data. This includes tasks like image and video recognition.
  
  5. **Robotics:** The integration of AI into robotic systems to enable them to perform tasks in the physical world.
  
  AI can be categorized into two main types:
  
  - **Narrow AI (or Weak AI):** AI systems designed and trained for a particular task. These systems excel in the specific task they are designed for but lack the broad capabilities of human intelligence.
  
  - **General AI (or Strong AI):** Hypothetical AI systems that possess the ability to understand, learn, and apply knowledge across a wide range of tasks, similar to human intelligence. General AI does not yet exist and remains a topic of theoretical research.
  
  AI has applications across various industries, including healthcare, finance, education, transportation, and entertainment. It continues to advance rapidly, with ongoing research and development in the pursuit of creating more intelligent and capable machines.`


  return (
    <>
      <div className="chat-bot-help-container">
        <FaAngleLeft className='angle-icon'/>
        <div className='chats'>
        <div className="chat-box">
          <div className='user-query'>
            <FaUser className='user' />
            <h3>What is AI?</h3>
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
          <h3>What is AI?</h3>
        </div>
        <div className='bot-response'>
          <FaRobot className='robot' />
          <p>{response}</p>
        </div>
      </div>
      <div className="chat-box">
        <div className='user-query'>
          <FaUser className='user' />
          <h3>What is AI?</h3>
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

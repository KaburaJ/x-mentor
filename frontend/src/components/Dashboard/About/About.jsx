import React, { useState } from "react";
import './About.css'
import founder1 from '../../../Common/images/tw-removebg-preview.png'
import logo from '../../../Common/images/x-ment-removebg-preview.png'
import { useNavigate } from "react-router-dom";
import twitterpng from '../../../Common/images/tw-removebg-preview.png'
import instagrampng from '../../../Common/images/ig-removebg-preview.png'
import facebookpng from '../../../Common/images/fb-removebg-preview.png'

export const AboutPage = () => {
    const navigate = useNavigate()
    const handleLandingPageNavigation = () => {
        navigate('/')
    }

    const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    // Send user message to the backend
    const userMessage = { text: inputText, type: 'user' };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch('/api/twitter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });

      const botResponse = await response.json();
      setMessages([...messages, { text: botResponse, type: 'bot' }]);
    } catch (error) {
      console.error('Error sending message to the backend:', error);
    }

    setInputText('');
  };

    return(
        <div className="about-container">
            <div className="header-section">
            <img src={logo} onClick={handleLandingPageNavigation} alt='VirtualCare'></img>
            </div>
            <div className="App-info">
            <p>Here at X Mentor we aim at giving you and helping you give the best experience to other Twitter or X users. 
              Join us to get expert curated predictions as well as tweets' classification. We help you help others!</p>
            </div>
        </div>
    )
}
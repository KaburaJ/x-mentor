import React, { useState } from "react";
import './About.css'
import founder1 from '../../../Common/images/tw-removebg-preview.png'
import logo from '../../../Common/images/lg.PNG'
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
          <img src={logo} onClick={handleLandingPageNavigation} alt='VirtualCare' style={{marginTop:'20px', borderRadius:'50%', width:'300px', marginLeft:'300px', marginBottom:'40px'}}></img>
      </div>
      <div className="App-info">
          <p>Here at X Mentor we aim at giving you and helping you give the best experience to other Twitter or X users. 
          Join us to get expert curated predictions as well as tweets' classification. We help you help others!</p>
          <p>We believe in the power of community and collaboration. By joining X Mentor, you become part of a network of like-minded individuals dedicated to improving the Twitter experience for everyone.</p>
          <p>Our team of experts works tirelessly to provide you with accurate predictions and insights, empowering you to make informed decisions and contribute positively to the online community.</p>
          <p>With X Mentor, you can trust that you're getting reliable information and support every step of the way. Join us today and start making a difference!</p>
      </div>
  </div>  
    )
}
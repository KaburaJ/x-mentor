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
            <p>We cover a broad range of specialisms. From diabetes, ostomy, continence and respiratory care, to medical nutrition, wound care, infusion therapy and medical and facility devices.
              Improving experiences of patients, providers and caregivers is key.
              We take care of their daily needs. From medical devices and supplementary care to education and 24-hour support.
              We deliver products directly to the home as well as to hospitals, nursing homes and other healthcare institutions.</p>
            </div>
        </div>
    )
}
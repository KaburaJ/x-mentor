import React from "react";
import { useNavigate } from "react-router-dom";
import './SignIn.css';
import logo from '../../Common/images/lg.PNG'
import smiley from '../../Common/images/smiley.png'
import sad from '../../Common/images/sad.png'
import neutral from '../../Common/images/neutral.png'
import sample from '../../Common/images/img-sample.png'
import sample2 from '../../Common/images/sample3.png'
import { FaCheckCircle, FaFlag, FaHeart, FaChartLine, FaTasks, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SignIn = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        // axios.get('http://localhost:5002/auth/google', { withCredentials: false })
        navigate('/home')

    };

    return (
        <div>
            <header id="header">
                <div className="container flex">
                    <img
                        id="header-img"
                        src={logo}
                        alt="logo"
                        
                    />
                    <h1 className="logo">X-Mentor</h1>
                </div>
            </header>
            <section className="showcase">
                <div className="container grid">
                    <div className="showcase-text">
                        <h1 id="showcase">X's Best Tweets Analyzer</h1>
                        <p>
                            Use X-Mentor to look up flagged tweets and maybe get a sentiment or two on your own tweets. Let us focus on the sentiment as you focus on tweeting.
                        </p>
                        <a href="#gallery" className="btn btn-outline" onClick={handleSignInClick}>Get Started</a>
                    </div>
                    <div className="showcase-form card">
                        <h2>Sign Me Up</h2>
                        <form id="form" action="https://www.freecodecamp.com/email-submit">
                            <div className="form-control">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Name:"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    id="telNo"
                                    type="tel"
                                    name="telNo"
                                    minlength="11"
                                    maxlength="11"
                                    placeholder="Phone Number:"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email:"
                                    required
                                />
                            </div>
                            <input
                                id="submit"
                                type="submit"
                                value="Send"
                                className="btn btn-primary"
                            />
                        </form>
                    </div>
                </div>
            </section>
            <section className="occassion container">
                <h2>Why X-Mentor?</h2>
                <div className="container grid-6">
                    <div className="text-align">
                        <img
                            src={smiley}
                            alt="Party Balloons"
                        />
                        <p style={{color:'#C669E0'}}>Positive Sentiments' Analysis</p>
                    </div>
                    <div className="text-align">
                        <img
                            src={neutral}
                            alt="Birthday Balloons"
                        />
                        <p style={{color:'#C669E0'}}>Neutral Sentiments' Analysis</p>
                    </div>
                    <div className="text-align">
                        <img
                            src={sad}
                            alt="Wedding Balloons"
                        />
                        <p style={{color:'#C669E0'}}>Negative Sentiments' Analysis</p>
                    </div>
                </div>
            </section>
            <section className="frame container-iframe" style={{ marginTop: '50px', marginBottom:'80px' }}>
                <p>At X-Mentor, we understand the importance of maintaining a positive online presence while navigating the fast-paced world of social media. With our cutting-edge platform, we offer a unique solution tailored to your needs, enabling you to effortlessly manage your Twitter activity with ease and confidence.</p>
                <img src={sample} alt="sample"></img>
                <h2 style={{marginBottom:'20px', color:'#C669E0'}}>Key Features:</h2>
                <ul style={{display:'flex', flexDirection:'column', gap:'20px'}}>
                    <li style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        <strong style={{color:'#C669E0', display:'flex', flexDirection:'row', gap:'20px'}}><FaCheckCircle style={{marginTop:'5px'}}/> Effortless Tweet Management:</strong> With X-Mentor, managing your tweets has never been easier. Our intuitive platform allows you to seamlessly look up flagged tweets and gain valuable insights into their sentiment, empowering you to maintain a curated and positive online image effortlessly.
                    </li>
                    <li style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        <strong style={{color:'#C669E0', display:'flex', flexDirection:'row', gap:'20px'}}><FaFlag style={{marginTop:'5px'}}/> Flagged Tweet Analysis:</strong> We specialize in helping you navigate through flagged tweets, providing you with the tools to understand their implications and take necessary actions. Whether it's addressing concerns or capitalizing on positive feedback, X-Mentor ensures you stay informed and in control.
                    </li>
                    <li style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        <strong style={{color:'#C669E0', display:'flex', flexDirection:'row', gap:'20px'}}><FaHeart style={{marginTop:'5px'}}/> Focus on Sentiment:</strong> At X-Mentor, we prioritize sentiment analysis, allowing you to focus on the emotional tone and context of your tweets. By harnessing the power of sentiment analysis, you can gauge public perception, tailor your messaging, and cultivate meaningful interactions with your audience.
                    </li>
                    <li style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        <strong style={{color:'#C669E0', display:'flex', flexDirection:'row', gap:'20px'}}><FaChartLine style={{marginTop:'5px'}}/> Enhanced Social Media Strategy:</strong> By leveraging X-Mentor, you can enhance your social media strategy and optimize your online presence. Gain valuable insights into your tweet sentiment, identify trends, and refine your messaging to resonate with your audience effectively.
                    </li>
                    <li style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        <strong style={{color:'#C669E0', display:'flex', flexDirection:'row', gap:'20px'}}><FaTasks style={{marginTop:'5px'}}/> Streamlined Workflow:</strong> Our platform streamlines your workflow, saving you time and effort in managing your Twitter activity. With X-Mentor handling the sentiment analysis, you can concentrate on what matters most – crafting engaging content and fostering meaningful connections with your followers.
                    </li>
                </ul>

            </section>
            <section className="gallery">
                <div className="container">
                    <h1 id="gallery">Join Us</h1>
                    <p>Choose X-Mentor and let us empower you to navigate the world of Twitter with confidence. Focus on tweeting while we take care of sentiment analysis – because your online reputation matters. Join us today and unlock the full potential of your social media presence.</p>

                        <img
                        style={{height:'500px', width:'1000px', marginBottom:'80px'}}
                            src={sample2}
                            alt="Balloon Display 1"
                        />
                </div>
            </section>
            <footer className="footer">
                <div className="container grid">
                    <div className="copyright">
                        <h1>X-Mentor</h1>
                        <p>Copyright &copy; 2024</p>
                    </div>
                    <div id="social">
                        <a href="#"><FaFacebook/></a>

                        <a href="#"><FaInstagram/></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default SignIn;

import React from "react";
import '../SignIn/SignIn.css';
import { FcGoogle } from "react-icons/fc";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from '../../Common/images/x-ment-removebg-preview.png'

const SignIn = () => {

    const navigate = useNavigate()
    const handleSignInClick = () => {
        navigate('/home')
    }

    
    return (
        <div className="signin-container">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="google-sign-in" onClick={() => handleSignInClick()}>
                <FcGoogle className="google-icon"/>
                <h3>Sign in with Google\</h3>
                <FaAngleDoubleRight className="angle-right"/>
            </div>

        </div>
    )
}

export default SignIn
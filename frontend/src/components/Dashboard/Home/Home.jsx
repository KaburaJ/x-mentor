import React, { useState, useEffect } from "react";
import '../Home/Home.css';
import SideNav from "../../../Common/SideNav/SideNav";
import DashBoardContent from "../Dash/Dash";
import Navbar from "../../../Common/NavBar/navbar";
import ChatBotHelp from "../Bot/Bot";
import { AboutPage } from "../About/About";
import BaseComponent from "../Base/Base";

const Home = () => {
    const [selectedNavItem, setSelectedNavItem] = useState("Home");

    return (
        <div className="home-container">
            <SideNav onSelectItem={setSelectedNavItem} selectedNavItem={selectedNavItem} />
            <div className="main-container">
                <>
                    <Navbar title={selectedNavItem} />
                    {selectedNavItem === 'Home' && <BaseComponent />}
                    {selectedNavItem === 'Dashboard' && <DashBoardContent />}
                    {selectedNavItem === 'Support Bot' && <ChatBotHelp />}
                    {selectedNavItem === 'About Us' && <AboutPage />}
                </>
                
            </div>
        </div>
    );
};

export default Home;

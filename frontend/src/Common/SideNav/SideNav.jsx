import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaHandsHelping, FaUser } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import '../SideNav/SideNav.css'
import logo from '../../Common/images/x-ment-removebg-preview.png'

const SideNav = ({ onSelectItem, selectedNavItem }) => {
    const handleItemClick = (item) => {
        onSelectItem(item)
    }
    return (
        <div className="side-nav">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="nav-list">
                <div
                    className={`list-item ${selectedNavItem === "Dashboard" ? "selected" : ""}`}
                    onClick={() => handleItemClick("Dashboard")}
                >
                    <RxDashboard className="dashboard-logo" />
                    <h3>Dashboard</h3>
                </div>
                {/* <div
                    className={`list-item ${selectedNavItem === "Helper" ? "selected" : ""}`}
                    onClick={() => handleItemClick("Helper")}
                >
                    <FaHandsHelping className="dashboard-logo" />
                    <h3>Your Helper</h3>
                </div> */}
                <div className={`list-item ${selectedNavItem === "Support Bot" ? "selected" : ""}`}
                     onClick={() => handleItemClick("Support Bot")}>
                    <FaRobot className="dashboard-logo" /><h3>Support Bot</h3>
                </div>
                <div className={`list-item ${selectedNavItem === "About Us" ? "selected" : ""}`}
                     onClick={() => handleItemClick("About Us")}>
                    <FcAbout className="dashboard-logo" /><h3>About Us</h3>
                </div>
            </div>
            <div className="profile-details">
                <div className="user-details"><FaUser className="user" />
                    <h3>@username</h3>
                </div>
                <button>Log Out</button>
            </div>
        </div>
    )
}

export default SideNav
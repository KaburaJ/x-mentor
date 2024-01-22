import React from "react";
import { FaBell, FaFacebookMessenger, FaSearch, FaUser } from "react-icons/fa";


const Navbar = ({title}) => {
    return(
        <div className="nav">
                    <h3>{title}</h3>
                    <div className="search">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search everything..."></input>
                    </div>
                    <div className="notification-icons">
                        <FaBell />
                        <FaFacebookMessenger />
                        <FaUser />
                    </div>
                </div>
    )
}

export default Navbar
import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className = "site-name">
                <Link to = "/">The Shoppies</Link>
            </div>
            <ul className = "nav-links">
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/nominations">Nominations</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
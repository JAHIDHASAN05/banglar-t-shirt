import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul>
                <Link to={"/home"}>HOme</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/Orders"}>OrderReview</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/Cheackout"}>Cheackout</Link>
            </ul>
        </nav>
    );
};

export default Header;
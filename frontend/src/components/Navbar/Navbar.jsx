import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='navbar'>
            <Link to="/" className='home-link'>Главная</Link>
        </nav>
    )
}

export default Navbar;
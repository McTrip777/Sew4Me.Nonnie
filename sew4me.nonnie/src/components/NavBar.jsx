import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const NavBar = () => {
const [isOpen, setIsOpen] = useState(false);
const [screenWidth, setScreenWidth] = useState(window.innerWidth);

const handleResize = () => {
setScreenWidth(window.innerWidth);
};

React.useEffect(() => {
window.addEventListener("resize", handleResize);
return () => {
window.removeEventListener("resize", handleResize);
};
}, []);

const toggleMenu = () => {
setIsOpen(!isOpen);
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
}

return (
<nav id="navbar">
    {screenWidth > 800 ? (
    <div className="nav-links">
        <Link to="/" >
            Home
        </Link>
        <Link to="/about" >
            About
        </Link>
        <Link to="/get-in-touch" >
            Get in Touch
        </Link>
    </div>
    ) : (
    <>
        <div className="hamburger" onClick={toggleMenu}>
            <div className="hamburgerLines"></div>
            <div className="hamburgerLines"></div>
            <div className="hamburgerLines"></div>
        </div>
        {isOpen ? (
            <div className="nav-links-mobile">
                <Link to="/" >
                    Home
                </Link>
                <Link to="/about" >
                    About
                </Link>
                <Link to="/get-in-touch" >
                    Get in Touch
                </Link>
            </div>
        ) : null}
    </>)}
</nav>
);};

export default NavBar;
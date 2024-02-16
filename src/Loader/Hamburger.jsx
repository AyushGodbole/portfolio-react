import React, { useState } from "react";
import '../Loader/Hamburger.css';
import { Link } from 'react-scroll'; // Import Link from 'react-scroll' for smooth scrolling

const Hamburger = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <nav className="hamburger">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>

                
            </nav>

            <div className={menu_class}>
            <div className="side">
                <ul>
                    <li>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={updateMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={updateMenu}>About</Link>
                    </li>
                    <li>
                        <Link to="skill" spy={true} smooth={true} offset={-100} duration={500} onClick={updateMenu}>Projects</Link>
                    </li>
                    <li>
                        <Link to="resume" spy={true} smooth={true} offset={-100} duration={500} onClick={updateMenu}>Resume</Link>
                    </li>
                    <li>
                        <a href="www.google.com" target='_blank'>External Link</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Hamburger;

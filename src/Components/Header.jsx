import React, { useState } from "react";
import "./header.css"
const Header = () => {

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        if(this.scrollY >= 560) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");
    
    return (
        <div>
            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav__logo">Smart Trainer</a>

                    <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list ">
                            <li className="nav__item">
                                <a href="#home" onClick={() => setActiveNav ('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" onClick={() => setActiveNav ('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                    About Us
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact"  onClick={() => setActiveNav ('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>

                    </div>
                </nav>

            </header>
        </div>

    )
}
export default Header;

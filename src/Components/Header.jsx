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

    // En tu componente React
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        const menuSection = document.querySelector(".menu__section");
        const isMobile = window.innerWidth <= 768;
    
        if (this.scrollY >= 560) {
            header.classList.add("scroll-header");
    
            if (menuSection && window.scrollY >= menuSection.offsetTop) {
                setNavColors(isMobile ? "black" : "white"); // Cambia los colores a negro
            } else {
                setNavColors(isMobile ? "black" : "white"); // Vuelve a los colores iniciales
            }
        } else {
            header.classList.remove("scroll-header");
            setNavColors(isMobile ? "black" : "white"); // Vuelve a los colores iniciales
        }
    });
    
    function setNavColors(color) {
        const navLogo = document.querySelectorAll(".nav__logo");
        const navLinks = document.querySelectorAll(".nav__link");
    
        navLogo.forEach(linkColor=> {
            linkColor.style.color = color;
            // Añade estilos hover según el color actual
            linkColor.addEventListener("mouseenter", function() {
                this.style.color = "black";
            });
    
            linkColor.addEventListener("mouseleave", function() {
                this.style.color = color;
            });
        });
    
        navLinks.forEach(link => {
            link.style.color = color;
    
            // Añade estilos hover según el color actual
            link.addEventListener("mouseenter", function() {
                this.style.color = "black";
            });
    
            link.addEventListener("mouseleave", function() {
                this.style.color = color;
            });
        });
    }

    
    return (
        <div>
            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav__logo">Smart Trainer</a>

                    <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list ">
                            <li className="nav__item">
                                <a href="#home" onClick={() => setActiveNav ('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-estate nav__icon"></i>
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" onClick={() => setActiveNav ('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-user nav__icon"></i>
                                    About Us
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact"  onClick={() => setActiveNav ('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                    <i className="uil uil-message nav__icon"></i>
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                    </div>
                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </nav>

            </header>
        </div>

    )
}
export default Header;

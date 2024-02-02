import React from "react";
import "./footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/jose-ignacio-lavecchia-suarez-766316239/"
                       className="footer__social-link"
                       target="_blank"
                       rel="noreferrer"
                    >
                    <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/Joseignlave1"
                       className="footer__social-link"
                       target="_blank"
                       rel="noreferrer"
                    >
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; Smart Trainer. All Rights reserved
                </span>
            </div>
        </footer>
    )
}
export default Footer;
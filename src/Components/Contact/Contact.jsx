import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g341y91', 'template_x68spj5', form.current, 'hn2rxd0LB3lCddGdy')
        e.target.reset()
    }
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Us</h2>
            <span className="section__subtitle">Have any sugesttions or improvements?, let us now</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <form  ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label  className="contact__form-tag">Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            className="contact__form-input"
                            placeholder="Insert your name"
                             />
                        </div>

                        <div className="contact__form-div">
                            <label  className="contact__form-tag">Mail</label>
                            <input 
                            type="email" 
                            name="email" 
                            className="contact__form-input"
                            placeholder="Insert your Email"
                             />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label  className="contact__form-tag">Message</label>
                            <textarea 
                            name="message"  
                            cols="30" 
                            rows="10" 
                            className="contact__form-input" 
                            placeholder="Write your Message"></textarea>
                        </div>
                        <button className="button button--flex">
                            <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21
                            ,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                            </svg>
                            <span className="text">Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;
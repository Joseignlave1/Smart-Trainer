import React from "react";
import "./about.css";
const About = () => {
    return(
        <section className="about section" id="about">
            <h2 className="section__title">About us</h2>
            <div className="about__container container grid">
                <p className="about__info">
                    We are a way to develop your physic, with Smart Trainer you can make a routine that fits yourself, with the help of AI.
                    join us and use SmartTrainer in your daily life.
                </p>
            </div>
        </section>
    )
}

export default About;
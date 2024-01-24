import React from "react";
import "./home.css"
import Title from "../Title";
import Social from "../Social/Social";
const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Title/>
                    <Social/>
                </div>
            </div>
        </section>
    )
}
export default Home;
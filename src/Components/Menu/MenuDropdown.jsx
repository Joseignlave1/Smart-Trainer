import React from "react";
import "./menu.css"
import Menu from "./Menu";
const MenuDropDown = () => {
    return(
        <section className="menu__section" id="menu">
            <div className="menu__container container grid">
            <h2 className="section__title">Create your personalize routine with AI</h2>
                <Menu/>
            </div>
        </section>
    )
}
export default MenuDropDown;
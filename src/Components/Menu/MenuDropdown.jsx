import React from "react";
import "./menu.css"
import Menu from "./Menu";
const MenuDropDown = () => {
    return(
        <section className="menu__section">
            <span className="section__subtitle"></span>
            <div className="menu__container container grid">
                <Menu/>
            </div>
        </section>
    )
}
export default MenuDropDown;
import "./description.css";

const Description = () => { 
    return (
        <section className="description__section">
            <div className="description__container container grid">
                <div className="description__content grid">
                    <h3 className="description__text">
                        <span>Train the way</span>
                        <span>you like</span>
                    </h3>
                    <a className="description__button"  href= "#menu">
                        Make Routine
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Description;
import React, { useState } from "react";
import "./menu.css";
const Menu = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [aspirations, setAspirations] = useState('');
    const [generatedRoutine, setGeneratedRoutine] = useState('');

    const handleGenerateRoutine = async () => {
        // Construye el prompt según la entrada del usuario
        const prompt = `Weight: ${weight}, Height: ${height}, Aspirations: ${aspirations}`;

        // Realiza la solicitud al backend
        const response = await fetch('http://localhost:3001/generate-routine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                weight,
                height,
                aspirations,
            }),
        });

        const data = await response.json();

        setGeneratedRoutine(data.generatedRoutine);
    };

    return(
    <div>
        <div className="menu__content">
            <div className="menu__box">
                <div className="menu__group">
                    <form action="" className="menu__form">
                        <div className="menu__form-div">
                            <label htmlFor="" className="menu__form-tag">Weight</label>
                            <input type="text" className="menu__form-input" placeholder="What is your Weight?" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                        </div>
                        <div className="menu__form-div">
                            <label htmlFor="" className="menu__form-tag">Height</label>
                            <input type="text" className="menu__form-input" placeholder="What is your Height?" value={height} onChange={(e) => setHeight(e.target.value)} />
                        </div>
                        <div className="menu__form-div">
                            <label htmlFor="" className="menu__form-tag">Aspirations</label>
                            <input type="text" className="menu__form-input" placeholder="Who you wanna be?" value={aspirations} onChange={(e) => setAspirations(e.target.value)}/>
                        </div>
                        <button className="button button--flex" onClick={handleGenerateRoutine}>
                            <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21
                            ,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                            </svg>
                            <span className="text">Generate Routine</span>
                        </button>
                        <div className="api__response">
                            <h1>THIS IS THE API RESPONSE{generatedRoutine}</h1>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Menu;

import React from 'react';
import './landing.scss';
import { Hello } from './Hello';

export const Landing = () => {
    return (
        <div className="landingWrapper">
            
            <div className="aboutWrapper">
                <div className="gridOneAboutColor"></div>
                <div className="gridTwoAboutText">
                    <div className="innerAboutText">
                        <h3 className="aboutHeading">I am Dani Sylvester</h3><br></br>
                        <p className="aboutParagraph">I'm a website developer with a passion for creative problem solving
                            and building beautiful things for the web.
                        </p>
                    </div>
                </div>
            </div>                  
        </div>
    )
}
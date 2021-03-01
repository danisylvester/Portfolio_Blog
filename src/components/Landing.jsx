import React from 'react';
import styles from './landing.module.scss';
import { Hello } from './Hello.jsx';

export const Landing = () => {
    return (
        <div className={styles.landingWrapper}>   
        <Hello></Hello>         
            <div className={styles.aboutWrapper}>
                <div className={styles.gridOneAboutColor}></div>
                <div className={styles.gridTwoAboutText}>
                    <div className={styles.innerAboutText}>
                        <h3 className={styles.aboutHeading}>I am Dani Sylvester</h3><br></br>
                        <p className={styles.aboutParagraph}>I'm a website developer with a passion for creative problem solving
                            and building beautiful things for the web.
                        </p>
                    </div>
                </div>
            </div>                  
        </div>
 
    )
}


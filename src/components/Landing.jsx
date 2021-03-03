import React, {useState, useEffect, useRef } from 'react';
import styles from './landing.module.scss';
import Skills from './Skills.jsx';


export const Landing = () => {
    //Detect when y axis scroll is greater than 0
    const [isScrolled, setScroll] = useState(false);
    useEffect( () => {
        const onScroll = (e) => {
            setScroll(window.scrollY > 0)
        };
        window.addEventListener("scroll",onScroll,{passive:true});
        return () => window.removeEventListener("scroll", onScroll);
    },[isScrolled])  

    //Split hello text to allow for escape characters and line breaking
    const helloOne = '\<Hello';
    const helloTwo = 'World';
    const helloThree = '/\>;';

    return (    
        <div>
            <div className={styles.leftPane}>
                <div className={styles.aboutGrid}>

                    <div className={styles.gridOneAboutColor}></div>
                    <div className={styles.gridTwoAboutText}>
                        <div className={`${styles.aboutTextWrapper} `}>
                            <div>
                                <h3 className={`${styles.aboutHeading} ${isScrolled ? styles.showHeader : styles.hideHeader}`}>I am Dani Sylvester</h3>
                                <p className={`${styles.aboutParagraph} ${isScrolled ? styles.showParagraph : styles.hideParagraph}`}>I'm a website developer with a passion for creative problem
                                    solving and building beautiful things for the web.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridThreeImg}>
                        <div className={styles.centerImg}>
                            <img className={styles.ladyImg} src='/src/assets/ladyReading.jpg'></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.rightPane}  ${isScrolled ? styles.moveHelloPanelRight : styles.moveHelloPanelLeft}`}>
                <div className={styles.helloGrid}>
                    <div className={`${styles.gridOneHello} ${isScrolled ? styles.moveHelloTextRight : styles.moveHelloTextLeft}`}>
                        <div className="helloChild">
                            {helloOne} <br></br>
                            {helloTwo} <br></br>
                            {helloThree}
                        </div>
                     </div>
                <div className={styles.gridTwoHelloColor}></div>
                </div>
            </div>
            
            <div className={styles.spacer}></div>

            <Skills></Skills>
        </div>
    )
}


import React, {useState, useEffect, useRef } from 'react';
import {useOnScreen} from './use-on-screen';
import styles from './landing.module.scss';


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
            <div className={`${styles.leftPane}`}>
                <div className={styles.aboutColor}></div>
            </div>

            <div className={`${styles.rightPane}  ${isScrolled ? styles.movePanelRight : styles.movePanelLeft}`}>
                <div className={styles.helloWrapper}>
                    <div className={`${styles.gridOneHello}`}>
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

            <div className={styles.everythingElse}></div>
        </div>
    )
}


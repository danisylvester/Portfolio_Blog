import React, {useState, useEffect, useRef } from 'react';
import styles from './landing.module.scss';
import { Hello } from './Hello.jsx';


export const Landing = () => {
    const [isScrolled, setScroll] = useState(false);
    
    useEffect( () => {
        const onScroll = (e) => {
            setScroll(window.scrollY > 0)
        };
        
        window.addEventListener("scroll",onScroll,{passive:true});
        return () => window.removeEventListener("scroll", onScroll);
    },[isScrolled]) 

    const helloOne = '\<Hello';
    const helloTwo = 'World';
    const helloThree = '/\>;';

    return (    
        <div>
            <div className={`${styles.leftPane} ${ isScrolled ? styles.goRight : styles}`}>
         
            </div>
            <div className={styles.rightPane}>
                <div className={styles.helloWrapper}>
                    <div className={styles.gridOneHello}>
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


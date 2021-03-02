import React, {useState, useEffect, useRef } from 'react';
import styles from './landing.module.scss';
import { Hello } from './Hello.jsx';


export const Landing = () => {
    const isVisible = true;

    const [isScrolled, setScroll] = useState(false);
    
   
    
    useEffect( () => {
        const onScroll = (e) => {
            setScroll(window.scrollY > 0)
        };
        
        window.addEventListener("scroll",onScroll,{passive:true});
        return () => window.removeEventListener("scroll", onScroll);
    },[isScrolled]) 

    return (    
        <div>
            <div className={`${styles.leftPane} ${ isScrolled ? styles.goRight : styles}`}>Anything</div>
            <div className={styles.rightPane}>Something</div>
            <div className={styles.spacer}></div>
            <div className={styles.everythingElse}>I AM DANI SO SMART YEA</div>
        </div>
    )
}


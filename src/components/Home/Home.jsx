import React, {useState, useEffect} from 'react'
import styles from './home.module.scss';
import {Skills} from '../Skills/Skills.jsx';
import { Element } from 'react-scroll'


export const Home = () => {
    // Parallax scrolling effect
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return() => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <div>
        <div className={styles.gridWrapper}>
            <div className={styles.gridSquare}>
                <div className={styles.squareWrapper}>
                    <img 
                        className={styles.squareImg} 
                        style={{ transform : `translateY(${offsetY * 0.8}px)`}}
                        src='/src/assets/square.png'
                    ></img>
                </div>
            </div>
            <div className={styles.gridOneText}>
                    <div className={styles.textWrapper}>
                        <div>
                            <div className={styles.headingWrapper}>
                                <h2 className={`${styles.heading} ${styles.typewriterText}`}>Hello,</h2>
                                <h2 className={styles.heading}>I am Dani <br></br>Sylvester</h2>
                            </div>
                            <p className={styles.text}>I'm a website developer with a passion for creative problem solving and 
                                building beautiful things for the web.
                            </p>
                        </div>
                    </div>
            </div>
            <div className={styles.gridTwoImg} style={{ transform : `translateY(${offsetY * 0.1}px)`}}>
                    <div className={styles.computerWrapper}>
                        <img 
                            className={styles.computerImg}
                            style={{ transform : `translateY(-${offsetY * 0.7}px)`}} 
                            src='/src/assets/computer.png'
                        ></img>
                    </div>
            </div>
        </div>
        <div id='skills'>
                <Skills></Skills>
        </div>
        
    </div>
    )
}

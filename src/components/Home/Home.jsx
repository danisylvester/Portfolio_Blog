import React, {useState, useEffect} from 'react'
import styles from './home.module.scss';
import {Projects} from '../Projects/Projects.jsx'
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
        <div className={styles.grid}>
            <div className={styles.gridText}>
                    <div className={styles.textWrapper}>
                        <div>
                            <div className={styles.textRowOne}>
                                <p>I'm <span className={styles.dani}>Dani</span>, I create</p>
                            </div>
                            <div className={styles.textRowTwo}>
                                <h2 className={styles.rowTwoHeading}>user-centric web applications</h2>
                            </div>
                            <div className={styles.textRowThree}>
                                <p>I'm a website developer with a passion for creative 
                                    problem solving and building beautiful 
                                    things for the web.
                                </p>
                            </div>
                        </div>
                        <div className={styles.viewBtnWrapper}>
                            <button className={styles.viewBtn}>
                                <span className={styles.btnText}>View Projects</span>
                            </button>
                        </div>
                    </div>
            </div>
            <div className={styles.gridComputerBkg} style={{ transform : `translateY(${offsetY * 0.1}px)`}}>
                    <div className={styles.computerWrapper}>
                        <img 
                            className={styles.computerImg}
                            style={{ transform : `translateY(-${offsetY * 0.7}px)`}} 
                            src='/src/assets/computer.png'
                        ></img>
                    </div>
            </div>
        </div>
        <div id='projects' className={styles.projects}>
            <Projects></Projects>
        </div>
        <div id='skills'>
        </div>

        
    </div>
    )
}

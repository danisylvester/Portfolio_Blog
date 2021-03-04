import React from 'react'
import styles from './home.module.scss';
import Skills from './Skills.jsx';

export const Home = () => {
    return (
    <div>
        <div className={styles.gridWrapper}>
            <div className={styles.gridSquare}>
                <div className={styles.squareWrapper}>
                    <img className={styles.squareImg} src='/src/assets/square.png'></img>
                </div>
            </div>
            <div className={styles.gridOneText}>
                    <div className={styles.textWrapper}>
                        <div>
                            <div className={styles.heading}>
                                <h2>Hello,</h2>
                                <h2>I am Dani <br></br>Sylvester</h2>
                            </div>
                            <p className={styles.text}>I'm a website developer with a passion for creative problem solving and 
                                building beautiful things for the web.
                            </p>
                        </div>
                    </div>
            </div>
            <div className={styles.gridTwoImg}>
                    <div className={styles.computerWrapper}>
                        <img className={styles.computerImg} src='/src/assets/computer.png'></img>
                    </div>
            </div>
        </div>

        <Skills></Skills>
    </div>
    )
}

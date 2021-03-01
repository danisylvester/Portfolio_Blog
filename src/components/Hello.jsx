import React from 'react'
import styles from './hello.module.scss';

export const Hello = () => {
    const helloOne = '\<Hello';
    const helloTwo = 'World';
    const helloThree = '/\>;';
    return (

        <div className={styles.helloWrapper}>
            <div className={styles.gridOneHello}>
                <div className="helloChild">
                    {helloOne} <br></br>
                    {helloTwo} <br></br>
                    {helloThree}
                </div>
            <div className={styles.gridTwoColor}></div>
            </div>
        </div>
    )
}

import React from 'react'
import styles from './skills.module.scss';

export const Skills = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.gridHeading}>
                <h3>
                    <span className={styles.purpleText}>My </span>
                    <span className={styles.heading}>Tools</span>
                </h3>
            </div>
            <div className={styles.gridIconsOne}>
                <div className={styles.iconWrap}>
                    <i className={`devicon-csharp-plain colored ${styles.icon}`}></i>
                    <p className={styles.iconLabel}>C#</p>
                </div>
                <div className={styles.iconWrap}>
                    <i className={`devicon-javascript-plain colored ${styles.icon}`}></i>
                    <p className={styles.iconLabel}>JavaScript</p>
                </div>
                <div className={styles.iconWrap}>
                    <i className={`devicon-typescript-plain colored ${styles.icon}`}></i>
                    <p className={styles.iconLabel}>TypeScript</p>
                </div>
            </div>
            <div className={styles.gridIconsTwo}>
                <div className={styles.iconWrap}>
                    <i className={`devicon-angularjs-plain colored ${styles.icon}`}></i>
                    <p className={styles.iconLabel}>Angular</p>
                </div>
                <div className={styles.iconWrap}>
                    <i className={`devicon-react-original colored ${styles.icon}`}></i>
                    <p className={styles.iconLabel}>React</p>
                </div>
                <div className={styles.iconWrap}>
                    <i className={`devicon-dot-net-plain colored ${styles.icon}`}></i>
                    <p className={styles.iconLabel}>ASP.Net</p>
                </div>

            </div>
            <div className={styles.gridIconsThree}>
                <div className={styles.iconWrap}>
                    <i className={`devicon-nodejs-plain colored ${styles.icon}`}></i>
                    <p className={styles.iconLabel}>Node.js</p>
                </div>
                <div className={styles.iconWrap}>
                    <i className={`devicon-mysql-plain colored ${styles.icon}`}></i>
                    <p className={styles.iconLabel}>MySQL</p>
                </div>
                <div className={styles.iconWrap}>
                    <i className={`devicon-mongodb-plain colored ${styles.icon}`}></i>
                    <p className={styles.iconLabel}>MongoDB</p>
                </div>
            </div>
            
        </div>
    )
}

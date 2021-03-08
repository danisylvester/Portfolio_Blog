import React from 'react'
import styles from './projects.module.scss';
import { ProjectContent } from '../ProjectContent/ProjectContent.jsx';

export const Projects = () => {
    return (
        <div>
            <div className={styles.grid}>
                <div className={styles.gridImg}>
                    <div className={styles.imgWrapper}>
                        <img className={styles.ladyImg} src='/src/assets/projectsLady.png'></img>
                    </div>
                </div>
                <div className={styles.gridHeader}>
                    <div className={styles.headingWrapper}>
                        <div>
                            <h2 className={styles.header}>My</h2>
                            <h2 className={styles.header}>Recent</h2>
                            <h2 className={styles.header}>Projects</h2>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectContent></ProjectContent>
        </div>
    )
}

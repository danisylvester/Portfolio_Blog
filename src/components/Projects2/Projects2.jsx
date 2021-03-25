import React from 'react'
import styles from './projects2.module.scss'

export const Projects2 = () => {
    return (
        <div className={styles.bkg}>
            <div className={styles.gridCard}>
                <div className={styles.gridTopShape}>
                    <img className={styles.topTriangle} src='/src/assets/sns-top-triangle.png'></img>
                </div>
                <div className={styles.gridDevices}>
                    <img className={styles.deviceImg} src='/src/assets/sns-devices.png'></img>
                </div>
                <div className={styles.gridTitle}>
                    <h3 className={styles.projTitle}>SNS Virtual Solutions</h3>
                </div>
                <div className={styles.gridSkills}>
                    <div className={styles.skill}>Angular</div>
                    <div className={styles.skill}>TypeScript</div>
                    <div className={styles.skill}>Node.js</div>
                    <div className={styles.skill}>SCSS</div>
                    <div className={styles.skill}>HTML</div>
                </div>
                <div className={styles.gridViewBtn}>
                     <button className={styles.viewBtn}>
                        <span className={styles.btnText}>View Project</span>
                    </button>
                </div>
                <div className={styles.gridBottomShapes}>
                    <img className={styles.bottomShapes} src='/src/assets/sns-bottom-shapes.png'></img>
                </div>
            </div> 
        </div>
    )
}

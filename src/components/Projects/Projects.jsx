import React from 'react'
import styles from './projects.module.scss'
import Tilty from 'react-tilty';



export const Projects = () => {
     return (
        <div className={styles.bkg}>
            <div className={styles.headingWrapper}>
                <div className={styles.mainHeading}>
                    <h3>Recent Projects</h3>
                </div>
                <div className={styles.mainHeading}>
                    <p>Check out my recent projects.</p>
                </div>
            </div>
            <div className={styles.projectWrapper}>
                <Tilty  reverse axis="x" scale={1} perspective={3500} reset={true} styles="cubic-bezier(.03,.98,.52,.99)">
                    <div className={styles.gridCard}>
                        <div className={styles.gridTopShape}>
                            <img className={styles.triangles} src='/src/assets/sns-top-triangle.png'></img>
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
                        <div className={styles.gridBtmSNSShapes}>
                            <img className={styles.bottomShapes} src='/src/assets/sns-bottom-shapes.png'></img>
                        </div>
                    </div> 
                 </Tilty>
            </div>
            <div className={styles.projectWrapper}>
                <Tilty reverse axis="x" scale={1} perspective={3500} reset={true} styles="cubic-bezier(.03,.98,.52,.99)">
                    <div className={styles.gridCard}>
                        <div className={styles.gridDevices}>
                            <img className={styles.deviceImg} src='/src/assets/uai-devices.png'></img>
                        </div>
                        <div className={styles.gridTitle}>
                            <h3 className={styles.projTitle}>UAI Middle East</h3>
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
                        <div className={styles.gridBtmUAIShapes}>
                            <img className={styles.bottomShapes} src='/src/assets/uai-left-shapes.png'></img>
                        </div>
                        <div className={styles.gridUAITriangle}>
                            <img className={styles.triangles} src='/src/assets/uai-right-triangle.png'></img>
                        </div>
                    </div> 
                </Tilty>
            </div>
        </div>
    )
}

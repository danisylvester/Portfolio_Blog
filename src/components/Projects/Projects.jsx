import React, {useEffect} from 'react'
import styles from './projects.module.scss'
import VanillaTilt from 'vanilla-tilt';

export const Projects = () => {

    // Mouse over tilt effect on tablet and computer views.
    useEffect(() => {
        if(window.innerWidth >= 768){
            VanillaTilt.init(document.querySelectorAll('.tilt'),{
                max: 5,
                speed: 100,
                transition: true,
                reset: true,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                axis: 'x'
            });
        }
    })
     return (
        <div className={styles.gridContainer}>

        <div className={styles.bkg}>
            <div className={styles.gridTextContainer}>
                <div className={styles.gridTextTitle}>
                    <h3 className={styles.purpleText}>Recent</h3>
                    <h3 className={styles.projHeader}>Projects</h3>
                </div>
                <div className={styles.gridTextParagraph}>
                    <p>Check out some of my featured work. If you’re interested in seeing more, reach out and say hello!</p>
                </div>
            </div>
            <div className={styles.projectWrapper}>
                <div className='tilt'>
                    <div className={`${styles.gridCard} ${styles.horizGridCard}`}>
                        <div className={`${styles.gridDevices} ${styles.horizGridDevices}`}>
                        <div className={styles.gradientColorOne}>
                                <div className={styles.bkgPattern}>
                                    <img className={styles.deviceImg} src='/src/assets/sns-devices.png'></img>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.gridTitle} ${styles.horizGridTitle}`}>
                            <h3 className={styles.projTitle}>Portfolio</h3>
                        </div>
                        <div className={`${styles.gridSkills} ${styles.horizGridSkills}`}>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>React</div>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>JavaScript</div>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>Node.js</div>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>MongoDB</div>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>Mongoose</div>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>AdminBro CMS</div>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>SCSS</div>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>HTML</div>
                        </div>
                        <div className={`${styles.gridViewBtn} ${styles.horizGridViewBtn}`}>
                            <button className={`${styles.viewBtn} ${styles.btnOne}`}>
                                <span className={styles.btnText}>View Project</span>
                            </button>
                        </div>
                    </div> 
                 </div>
            </div>
            <div className={styles.projectWrapper}>
                <div className='tilt'>
                    <div className={`${styles.gridCard} ${styles.horizGridCard}`}>
                        <div className={`${styles.gridDevices} ${styles.horizGridDevices}`}>
                            <div className={styles.gradientColorTwo}>
                                <div className={styles.bkgPattern}>
                                    <img className={styles.deviceImg} src='/src/assets/sns-devices.png'></img>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.gridTitle} ${styles.horizGridTitle}`}>
                            <h3 className={styles.projTitle}>SNS Virtual Solutions</h3>
                        </div>
                        <div className={`${styles.gridSkills} ${styles.horizGridSkills}`}>
                            <div className={`${styles.skill} ${styles.skillsTwo}`}>Angular</div>
                            <div className={`${styles.skill} ${styles.skillsTwo}`}>TypeScript</div>
                            <div className={`${styles.skill} ${styles.skillsTwo}`}>Node.js</div>
                            <div className={`${styles.skill} ${styles.skillsTwo}`}>SCSS</div>
                            <div className={`${styles.skill} ${styles.skillsTwo}`}>HTML</div>
                        </div>
                        <div className={`${styles.gridViewBtn} ${styles.horizGridViewBtn}`}>
                            <button  className={`${styles.viewBtn} ${styles.btnTwo}`}>
                                <span className={styles.btnText}>View Project</span>
                            </button>
                        </div>
                    </div> 
                </div>
            </div>
            <div className={`${styles.verticalWrap}`}>
                <div className='tilt'>
                    <div className={styles.gridCard}>
                        <div className={styles.gridDevices}>
                            <div className={styles.gradientColorOne}>
                                <div className={styles.bkgPattern}>
                                    <img className={styles.deviceImg} src='/src/assets/uai-devices.png'></img>
                                </div>
                            </div>
                        </div>
                        <div className={styles.gridTitle}>
                            <h3 className={styles.projTitle}>UAI MIDDLE EAST</h3>
                        </div>
                        <div className={styles.gridSkills}>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>Angular</div>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>TypeScript</div>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>Node.js</div>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>SCSS</div>
                            <div className={`${styles.skill} ${styles.skillsOne}`}>HTML</div>
                        </div>
                        <div className={styles.gridViewBtn}>
                            <button  className={`${styles.viewBtn} ${styles.btnOne}`}>
                                <span className={styles.btnText}>View Project</span>
                            </button>
                        </div>
                    </div> 
                </div>
            </div>
            <div className={`${styles.verticalWrap} ${styles.polyglot}`}>
                <div className='tilt'>
                    <div className={styles.gridCard}>
                        <div className={styles.gridDevices}>
                            <div className={styles.gradientColorThree}>
                                <div className={styles.bkgPattern}>
                                    <img className={styles.deviceImg} src='/src/assets/polyglot.png'></img>
                                </div>
                            </div>
                        </div>
                        <div className={styles.gridTitle}>
                            <h3 className={styles.projTitle}>Polyglot Chrome Extension</h3>
                        </div>
                        <div className={styles.gridSkills}>
                            <div className={`${styles.skill} ${styles.skillsThree}`}>JavaScript</div>
                            <div className={`${styles.skill} ${styles.skillsThree}`}>CSS</div>
                            <div className={`${styles.skill} ${styles.skillsThree}`}>HTML</div>
                        </div>
                        <div className={styles.gridViewBtn}>
                            <button  className={`${styles.viewBtn} ${styles.btnThree}`}>
                                <span className={styles.btnText}>View Project</span>
                            </button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        </div>
    )
}

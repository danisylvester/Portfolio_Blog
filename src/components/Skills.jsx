import React from 'react';
import styles from './skills.module.scss';

const Skills = () => {
    return (
        <div className={styles.skillsGrid}>
            <div className={styles.gridOnePolygons}>
                <div className={styles.polygonWrapper}>
                    <img className={styles.polygonImg} src='/src/assets/polygon.png'></img>
                </div>
            </div>
            <div className={styles.gridTwoText}>
                <div className={styles.textWrapper}>
                    <div>
                        <h3>
                            My<br></br>
                            Favorite<br></br>
                            Tech
                        </h3>
                        <p>
                            I’ve created dynamic websites utilizing the .Net and MERN stacks. 
                            I’ve also created static sites with Angular powered front-ends.
                        </p>
                        <p>
                            I enjoy learning and working with new technologies, 
                            and also writing about the tech that I use. 
                        </p>
                        <p>
                            Check out my blog to read more about what I’m learning!
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.gridThreeSVG}>
                <div className={styles.skillsImgWrapper}>
                    <img className={styles.skillsImg} src='/src/assets/skillsLady.png'></img>
                </div>
            </div>

        </div>
    )
}

export default Skills

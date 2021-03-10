import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './skills.module.scss';
import { Element } from 'react-scroll'

export const Skills = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return() => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.skillsGrid}>
            <div className={styles.gridOnePolygons}>
                <div className={styles.polygonWrapper} >
                    <img 
                        className={styles.polygonImg} 
                        src='/src/assets/polygon.png'
                        style={{ transform : `translateY(${offsetY * 0.3}px)`}} 
                    ></img>
                </div>
            </div>
            <div className={styles.gridTwoText} >
                <div className={styles.textWrapper} >
                    <div>
                        <h3 >
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
            <div className={styles.gridThreeImg}>
                <div className={styles.skillsImgWrapper}>
                    <img 
                        className={styles.skillsImg} 
                        src='/src/assets/skillsLady.png'
                    ></img>
                </div>
            </div>
            <div className={styles.gridButtons}>
                <div className={styles.btnsWrapper}>
                    <div className={styles.leftBtn}>
                        <Link to='/blogposts' className={styles.link}>
                            <img className={styles.arrowImg} src='/src/assets/leftArrow.jpg'></img>
                            Tech Blog
                        </Link>
                    </div>
                    <div className={styles.rightBtn}>
                        <Link to='/projects' className={styles.link}>
                            Projects
                            <img className={styles.arrowImg} src='/src/assets/rightArrow.jpg'></img>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

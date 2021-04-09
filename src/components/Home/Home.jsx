import React, {useState, useEffect} from 'react'
import styles from './home.module.scss';
import { Projects } from '../Projects/Projects.jsx'
import { Element } from 'react-scroll'
import { Skills } from '../Skills/Skills.jsx';
import { Contact} from '../Contact/Contact.jsx';
import { Blog } from '../Blog/Blog.jsx'
import { useParams } from 'react-router';

export const Home = (props) => {
    // Parallax scrolling effect
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    let { id } = useParams();

    function scrollToSection(sectionId){
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'});
    }
    function resetID(){
        id = null;
        console.log(`new id value: ${id}`)
    }

    useEffect(() => {
        console.log('running use effect!')
        if(id != undefined || id != null){
            scrollToSection(id);
            resetID();
        }
    },[id]);


    // Listener for computer parallax scroll effect
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Removing listener on component unmount
        return() => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <div>
        <div id='home' className={styles.grid}>
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
                            <button className={styles.viewBtn} onClick={()=>{scrollToSection('projects')}}>
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
        <div id='skills' className={styles.skills}>
            <Skills></Skills>
        </div>
        <div id='projects' className={styles.projects}>
            <Projects></Projects>
        </div>
        <div id='blog' className={styles.blog}>
            <Blog></Blog>
        </div>
        <div id='contact' className={styles.contact}>
            <Contact></Contact>
        </div>

        
    </div>
    )
}

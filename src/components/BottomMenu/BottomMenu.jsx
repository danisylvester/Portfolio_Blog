import React from 'react';
import styles from './bottomMenu.module.scss';
import { NavLink } from "react-router-dom";


export const BottomMenu = () => {
    return (
        <div className={styles.bkg}>
            <div className={styles.linkContainer}>

            <NavLink to='/' 
                className={styles.link}
                exact={true}
                >
                <img className={styles.homeIcon} src='/src/assets/home-icon.png'></img>
            </NavLink>
            </div>
            <div className={styles.linkContainer}>
            <NavLink
                to='/#skills'
                className={styles.link}
            >
                Skills
            </NavLink>
            </div>
            <div className={styles.linkContainer}>
            <NavLink 
                to='/#projects'
                className={styles.link}
            >
                Projects
            </NavLink>
            </div>
            <div className={styles.linkContainer}>
            <NavLink 
                to='/blogposts'
                className={styles.link}
            >
                Blog
            </NavLink>
            </div>
            <div className={styles.linkContainer}>
            <NavLink
                to='/#contact'
                className={styles.link}
            >
                Contact
            </NavLink>
        </div>
      </div>
    )
}

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";
import Scroll from "react-scroll";
import { Nav } from "react-bootstrap";

export const Menu = () => {
  const logo = "</>";
  return (
    <div className={styles.grid}>
      <div className={styles.gridLogo}>

          <NavLink to="/home" className={styles.logoStyle}>
            {logo}
          </NavLink>
          </div>
          <div className={styles.gridLinks}>
        <div className={styles.linksWrap}>
            <div className={styles.linkContainer}>

              <NavLink to='/home' 
                  className={styles.inactive}
                  activeClassName={styles.active}
                  exact={true}
                  >
                Home
              </NavLink>
            </div>
            <div className={styles.linkContainer}>
              <NavLink
                  to='/skills'
                  className={styles.inactive}
                  activeClassName={styles.active}
                  >
                Skills
              </NavLink>
            </div>
            <div className={styles.linkContainer}>
              <NavLink 
                  to='/projects'
                  className={styles.inactive}
                  activeClassName={styles.active}
                  >
                Projects
              </NavLink>
            </div>
            <div className={styles.linkContainer}>
              <NavLink 
                  to='/blog'
                  className={styles.inactive}
                  activeClassName={styles.active}
                  >
                Tech Blog
              </NavLink>
            </div>
            <div className={styles.linkContainer}>
              <NavLink
                  to='/contact'
                  className={styles.inactive}
                  activeClassName={styles.active}
                  >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.gridContact}>
          <NavLink to="/contact">
            <button className={styles.contactBtn}>
              <span className={styles.btnText}>Say Hello!</span>
            </button>
          </NavLink>
        </div>
    </div>
  );
};

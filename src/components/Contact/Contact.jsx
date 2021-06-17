import React, { Component } from "react";
import styles from "./contact.module.scss";
import { ContactForm } from "../ContactForm/ContactForm.jsx";

export class Contact extends Component {
  render() {
    return (
      <div className={styles.grid}>
        <div className={styles.bkgColor}></div>
        <div className="gridTitle">
          <h3 className="purpleText">Contact</h3>
          <h3 className="whiteTitle">Me</h3>
        </div>
        <div className="gridDescription">
          <p className="whiteDescription">
            I’m open to new opportunities. Please reach out if you’d like to
            hire me!
          </p>
        </div>
        <div className={styles.gridIcons}>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>
              <a
                target="_blank"
                href="https://github.com/danisylvester"
                style={{ textDecoration: "none" }}
              >
                <i className={`devicon-github-original ${styles.icon}`}></i>
                <p className={styles.iconLabel}>GitHub</p>
              </a>
            </div>
            <div className={styles.iconWrapper}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/dani-sylvester/"
                style={{ textDecoration: "none" }}
              >
                <i className={`devicon-linkedin-plain ${styles.icon}`}></i>
                <p className={styles.iconLabel}>LinkedIn</p>
              </a>
            </div>
            <div className={styles.iconWrapper}>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1rSEQyPTv8IQxKgpqjQch43BaPyoTs9xb/view?usp=sharing"
                style={{ textDecoration: "none" }}
              >
                <img className={styles.icon} src="/assets/resume.png"></img>
                <p className={styles.iconLabel}>Resume</p>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.gridForm}>
          <h4 className={styles.hello}>Say Hello!</h4>
          <ContactForm></ContactForm>
        </div>
      </div>
    );
  }
}

export default Contact;

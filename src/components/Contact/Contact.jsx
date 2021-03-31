import React, { Component } from 'react'
import styles from './contact.module.scss';
import { ContactForm } from '../ContactForm/ContactForm.jsx';

export class Contact extends Component {
    render() {
        return (
            <div className={styles.grid}>
                <div className={styles.bkgColor}></div>
                    <div className={styles.gridTextTitle}>
                        <h3 className={styles.purpleText}>Contact</h3>
                        <h3 className={styles.header}>Me</h3>
                    </div>
                    <div className={styles.gridTextParagraph}>
                        <p className={styles.headerParagraph}>I’m open to new opportunities. Please reach out if you’d like to hire me!</p>
                    </div>
                    <div className={styles.gridIcons}>
                        <div className={styles.iconContainer}>
                            <div className={styles.iconWrapper}>
                                <i className={`devicon-github-original ${styles.icon}`}></i>
                                <p className={styles.iconLabel}>GitHub</p>
                            </div>
                            <div className={styles.iconWrapper}>
                                <i className={`devicon-linkedin-plain ${styles.icon}`}></i>
                                <p className={styles.iconLabel}>LinkedIn</p>
                            </div>
                            <div className={styles.iconWrapper}>
                                <img className={styles.icon} src='/src/assets/resume.png'></img>
                                <p className={styles.iconLabel}>Resume</p>
                        </div>
                        </div>
                    </div>
                    <div className={styles.gridForm}>
                        <h4 className={styles.hello}>Say Hello!</h4>
                        <ContactForm></ContactForm>
                    </div>
            </div>
        )
    }
}

export default Contact

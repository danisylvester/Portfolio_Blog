import React, { Component } from 'react'
import styles from './contact.module.scss';
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import Overlay from 'react-bootstrap/Overlay'

export class Contact extends Component {
    render() {
        return (
            <div className={styles.bkg}>
                <div className={styles.grid}>
                    <div className={styles.gridLeftInfo}>
                        <div className={styles.leftText}>
                            <h4 className={styles.leftHeading}>Thank you for stopping by!</h4>
                            <div className={styles.paragraphWrapper}>
                                <p className={styles.leftParagraph}>
                                    I am currently open to new opportunities, and I'd love to connect with you. 
                                </p>
                                <p className={styles.leftParagraph}>
                                    Feel free to download my resume and send a message to say hello.
                                </p>
                            </div>
                        </div>
                        <div className={styles.iconsWrapper}>
                            <div className={styles.iconContainer}>
                                <a href='#' download><img src='/src/assets/resume.png' className={styles.iconImg}></img></a>
                            </div>
                            <div className={styles.iconContainer}>
                                <a href='#' download><img src='/src/assets/github.png' className={styles.iconImg}></img></a>
                            </div>
                            <div className={styles.iconContainer}>
                                <a href='#' download><img src='/src/assets/linkedin.png' className={styles.iconImg}></img></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gridRightForm}>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact

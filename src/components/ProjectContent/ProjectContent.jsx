import React, {useEffect, useState} from 'react'
import styles from './projectContent.module.scss';

export const ProjectContent = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return() => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <div className={styles.grid}>
                <div className={styles.gridLine}>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.gridBkgImg}>
                    <img 
                        className={styles.purpleBkgImg} 
                        style={{ transform : `translateY(${offsetY * 0.6}px)`}} 
                        src='src/assets/purpleOrgShape.png'
                    ></img>
                </div>
                <div className={styles.gridContent}>
                    <div className={styles.circle}></div>
                    <div className={styles.gridProject}>
                        <div className={styles.gridTextWrapper}>
                                <div>
                                    <h3 className={styles.header}>SNS</h3>
                                    <h3 className={styles.header}>Virtual</h3>
                                    <h3 className={styles.header}>Solutions</h3>
                                    <div className={styles.textParagraph}>
                                        <p>The SNS Virtual Solutions website was created with an Angular 
                                            front-end and a node.js backend, and it is hosted by Heroku. 
                                        </p>
                                        <p>
                                            This website features an Angular reactive form on the Contact page 
                                            that utilizes the MailGun API to send emails directly to the business owner. 
                                        </p>
                                    </div>
                                </div>
                        </div>
                        <div className={styles.gridImgWrapper}>
                            <img className={styles.projectImg} src='/src/assets/sns.png'></img>
                        </div>
                        <div className={styles.gridButtonsWrapper}>
                            <div className={styles.buttonWrapper}>
                                <a href='#'>Live Site</a>
                            </div>
                            <div className={styles.buttonWrapper}>
                                <a href='#'>GitHub</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.circle}></div>
                    <div className={styles.gridProject}>
                        <div className={styles.gridTextWrapper}>
                                <div>
                                    <h3 className={styles.header}>UAI</h3>
                                    <h3 className={styles.header}>Middle</h3>
                                    <h3 className={styles.header}>East</h3>
                                    <div className={styles.textParagraph}>
                                        <p>The SNS Virtual Solutions website was created with an Angular 
                                            front-end and a node.js backend, and it is hosted by Heroku. 
                                        </p>
                                        <p>
                                            This website features an Angular reactive form on the Contact page 
                                            that utilizes the MailGun API to send emails directly to the business owner. 
                                        </p>
                                    </div>
                                </div>
                        </div>
                        <div className={styles.gridImgWrapper}>
                            <img className={styles.projectImg} src='/src/assets/uai.png'></img>
                        </div>
                        <div className={styles.gridButtonsWrapper}>
                            <div className={styles.buttonWrapper}>
                                <a href='#'>Live Site</a>
                            </div>
                            <div className={styles.buttonWrapper}>
                                <a href='#'>GitHub</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.circle}></div>
                    <div className={styles.gridProject}>
                        <div className={styles.gridTextWrapper}>
                                <div>
                                    <h3 className={styles.header}>SNS</h3>
                                    <h3 className={styles.header}>Virtual</h3>
                                    <h3 className={styles.header}>Solutions</h3>
                                    <div className={styles.textParagraph}>
                                        <p>The SNS Virtual Solutions website was created with an Angular 
                                            front-end and a node.js backend, and it is hosted by Heroku. 
                                        </p>
                                        <p>
                                            This website features an Angular reactive form on the Contact page 
                                            that utilizes the MailGun API to send emails directly to the business owner. 
                                        </p>
                                    </div>
                                </div>
                        </div>
                        <div className={styles.gridImgWrapper}>
                            <img className={styles.projectImg} src='/src/assets/sns.png'></img>
                        </div>
                        <div className={styles.gridButtonsWrapper}>
                            <div className={styles.buttonWrapper}>
                                <a href='#'>Live Site</a>
                            </div>
                            <div className={styles.buttonWrapper}>
                                <a href='#'>GitHub</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


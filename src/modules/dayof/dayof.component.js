import React, { Component } from 'react'

import styles from './dayof.scss'

class DayOf extends Component {
    render = () => (
        <div className={styles['dayof']}>
            <div className={styles['responsive-container']}>

                <div className={styles['dayof-header']}>
                    <a href="http://hackillinois.org"><img className={styles['dayof-header-logo']} src="src/assets/img/svg/landing-logo.svg" /></a> <br/><br /><br />
                    <h2 className={styles['dayof-title']}>Day Of</h2>
                </div>

                <br/><br/>

                <div className={styles['dayof-body']}>
                    <a href="/maps"><div id={styles.maps} className={styles['project-card']}>
                        <img draggable="false" src={"src/assets/img/card-0.svg"}/>
                        <span className={styles.label}>Maps</span>
                    </div></a>

                    <a href="/schedule"><div id={styles.schedule} className={styles['project-card']}>
                        <img draggable="false" src={"src/assets/img/card-6.svg"}/>
                        <span className={styles.label}>Schedule</span>
                    </div></a>

                    <a href="/prizes"><div id={styles.prizes} className={styles['project-card']}>
                        <img draggable="false" src={"src/assets/img/card-1.svg"}/>
                        <span className={styles.label}>Prizes</span>
                    </div></a>

                    <a href="/travel"><div id={styles.travel} className={styles['project-card']}>
                        <img draggable="false" src={"src/assets/img/card-5.svg"}/>
                        <span className={styles.label}>Travel</span>
                    </div></a>

                    <a href="/#faq"><div id={styles.faq} className={styles['project-card']}>
                        <img draggable="false" src={"src/assets/img/card-2.svg"}/>
                        <span className={styles.label}>FAQ</span>
                    </div></a>

                    <a href="http://go.hackillinois.org/2017slack"><div id={styles.mentorship} className={styles['project-card']}>
                        <img draggable="false" src={"src/assets/img/card-4.svg"}/>
                        <span className={styles.label}>Mentorship</span>
                    </div></a>
                </div>

                <div className={styles['dayof-footer']}>
                    <div className={styles['footer-cell']}><a href="https://www.facebook.com/hackillinois/"><img src="src/assets/img/svg/dayof/dayof-icon-01.svg" /></a></div>
                    <div className={styles['footer-cell']}><a href="https://twitter.com/HackIllinois"><img src="src/assets/img/svg/dayof/dayof-icon-02.svg" /></a></div>
                    <div className={styles['footer-cell']}><a href="mailto:contact@hackillinois.org"><img src="src/assets/img/svg/dayof/dayof-icon-03.svg" /></a></div>
                    <div className={styles['footer-cell']}><a href="tel:1-847-485-9432"><img src="src/assets/img/svg/dayof/dayof-icon-04.svg" /></a></div>
                </div>

            </div>
        </div>
    )
}

export default DayOf
import React, { Component } from 'react'
import axios from 'axios'

import styles from './prizes.scss'

class Prizes extends Component {
    render = () => (
        <div className={styles['prizes']}>
            <div className={styles['prizes-header']}>

                <img className={styles['prizes-header-logo']} src="src/assets/img/svg/landing-logo.svg" /> <br/><br />
                <h3 className={styles['prizes-header-title']}>Prizes</h3>
                <h5 className={styles['prizes-header-subtitle']}>Placeholder Text</h5>
                <br />

            </div>

            <div className={styles['prizes-body']}>
                
            </div>
            
            <br />

            <div className={styles['prizes-footer']}>
                <h5>Questions? Email us at contact@hackillinois.org!</h5>
                <br />
            </div>
        </div>
    )
}

export default Prizes
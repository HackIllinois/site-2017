import React, { Component } from 'react'
import axios from 'axios'

import styles from './travel.scss'

class Travel extends Component {
    render = () => (
        <div className={styles['travel']}>

            <div className={styles['travel-header']}>

                <img src="src/assets/img/svg/landing-logo.svg" /> <br/><br />
                <h3 className={styles['travel-header-title']}>Travel</h3>
                <h5 className={styles['travel-header-subtitle']}>HackIllinois 2017 will be sending busses to the following schools!</h5>

            </div>

            <div className={styles['travel-body']}>

                <div className={styles['travel-body-panel']}>
                    <h4 className={styles['travel-body-panel-title']}></h4>

                </div>

            </div>
        </div>
    )
}

export default Travel

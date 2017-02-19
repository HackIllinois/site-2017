import React, { Component } from 'react'
import axios from 'axios'

import Purdue from './components/purdue.component.js'
import Florida from './components/florida.component.js'
import Wisconsin from './components/wisconsin.component.js'
import Michigan from './components/michigan.component.js'
import Northwestern from './components/northwestern.component.js'
import UIC from './components/uic.component.js'

import styles from './travel.scss'

class Travel extends Component {
    render = () => (
        <div className={styles['travel']}>

            <div className={styles['travel-header']}>

                <img className={styles['travel-header-logo']} src="src/assets/img/svg/landing-logo.svg" /> <br/><br />
                <h3 className={styles['travel-header-title']}>Travel</h3>
                <h5 className={styles['travel-header-subtitle']}>HackIllinois 2017 will be sending busses to the following schools:</h5>
                <br />

            </div>

            <div className={styles['travel-body']}>
                <Purdue />
                <Florida />
                <Michigan />
                <Wisconsin />
                <Northwestern />
                <UIC />
            </div>


            <br />

            <div className={styles['travel-footer']}>
                <h5>Questions? Email us at contact@hackillinois.org!</h5>
                <br />
            </div>
        </div>
    )
}

export default Travel

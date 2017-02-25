import React, { Component } from 'react'

import DCL from './components/dcl.component'
import ECEB from './components/eceb.component'
import Expo from './components/expo.component'
import Siebel from './components/siebel.component'
import Union from './components/union.component'
import Gym from './components/gym.component'

import styles from './maps.scss'



class Maps extends Component {
    render = () => (
        <div className={styles['maps']}>
            <div className={styles['maps-header']}>

                <a href="http://hackillinois.org"><img className={styles['maps-header-logo']} src="src/assets/img/svg/landing-logo.svg" /></a> <br/><br />
                <h3 className={styles['maps-header-title']}>maps</h3>
                <h5 className={styles['maps-header-subtitle']}>HackIllinois 2017 is being held in the following buildings:</h5>
                <br />


            </div>

            <div className={styles['maps-body']}>
                <DCL />
                <ECEB />
                <Expo />
                <Siebel />
                <Gym />
                <Union />
            </div>

            <br />

            <div className={styles['maps-footer']}>
                <h5>Questions? Email us at contact@hackillinois.org!</h5>
                <br />
            </div>
        </div>
    )
}

export default Maps
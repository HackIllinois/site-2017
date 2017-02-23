import React, { Component } from 'react'
import axios from 'axios'

import One517 from './components/1517.component'
import AARP from './components/aarp.component'
import Amadeus from './components/amadeus.component'
import CapitalOne from './components/capitalone.component'
import Facebook from './components/facebook.component'
import Firebase from './components/firebase.component'
import Fulcrum from './components/fulcrum.component'
import Google from './components/google.component'
import IMO from './components/imo.component'
import JohnDeere from './components/johndeere.component'
import MakeSchool from './components/makeschool.component'
import Microsoft from './components/microsoft.component'
import Twilio from './components/twilio.component'

import styles from './prizes.scss'

class Prizes extends Component {
    render = () => (
        <div className={styles['prizes']}>
            <div className={styles['prizes-header']}>

                <img className={styles['prizes-header-logo']} src="src/assets/img/svg/landing-logo.svg" /> <br/><br />
                <h3 className={styles['prizes-header-title']}>Prizes</h3>
                <h5 className={styles['prizes-header-subtitle']}>The following prizes will be awarded at HackIllinois 2017:</h5>
                <br />

            </div>

            <div className={styles['prizes-body']}>
                <Fulcrum />
                <Microsoft />
                <IMO />
                <AARP />
                <Google />
                <Firebase />
                <Amadeus />
                <Facebook />
                <JohnDeere />
                <CapitalOne />
                <Twilio />
                <One517 />
                <MakeSchool />
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
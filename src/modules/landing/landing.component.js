import React, { Component } from 'react'
import axios from 'axios'

import styles from './landing.scss'

import Navbar from './navbar.component'
import Registration from './registration.component'
import About from './about.component'
import Sponsors from './sponsors.component.js'
import FAQ from './faq.component.js'

class Landing extends Component {
  render = () =>  {
      return (
          <div>
              <div className={styles.landing}>
                  <div className={styles.container}>
                      <Navbar />
                      <Registration />
                  </div>
                  <div className={styles.visual}>
                      <div className={styles.bridgecontainer}>
                          
                          <div className={styles.miner}>
                              <img src="src/assets/img/svg/guy.svg" />
                          </div>

                          <img className={styles.bridge} src="src/assets/img/svg/bridge.svg" />
                      </div>
                  </div>
              </div>

              <div className={styles.container}>
                  <About />
                  <FAQ />
                  <Sponsors />
              </div>
          </div>
      );
  }
}

export default Landing

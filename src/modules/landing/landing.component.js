import React from 'react'


import common from '../common/common.css'
import styles from './landing.styl'

import {Cave, Eyes, Sign, Logo} from '../../assets/landing'

const Landing = () => (
  <div className={styles.landing}> 
    <div className={styles.cave}>
      <img src={Cave}/>

      <div className={styles.eyes}>
        <img src={Eyes}/>
      </div>

      <div className={styles.logo}>
        <img src={Logo}/>
      </div>

      <div className={styles.sign}>
        <img src={Sign}/>
      </div>
    </div>
    <div className={styles.caveMobileOnly}>
      <div className={styles.eyesMobileOnly}></div>
      <div className={styles.logoMobileOnly}></div>
      <div className={styles.signMobileOnly}></div>

    </div>
  </div>
)

export default Landing

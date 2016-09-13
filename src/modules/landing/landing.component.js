import React from 'react'


import common from '../common/common.css'
import styles from './landing.styl'

import {Cave, Eyes, Sign, Logo} from '../../assets/landing'

const Landing = () => (
  <div className={styles.landing}> 
    <div className={styles.cave}>
      <img src={Cave}/>
      <div className={styles.sign}>
        <img src={Sign}/>
      </div>
    </div>
    <div className={styles.caveMobileOnly}>
    </div>
  </div>
)

export default Landing

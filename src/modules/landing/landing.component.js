import React from 'react'

import common from '../common/common.css'
import styles from './landing.styl'

const Landing = () => (
  <div className={styles.landing}> 
    <div className={styles.cave}> 
      <img src="src/assets/landing-cave.svg"/>
      <div className={styles.logo}>
        <img src="src/assets/landing-sign.svg"/>
      </div>
    </div>
  </div>
)

export default Landing

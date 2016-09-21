import React from 'react'


import common from '../common/common.styl'
import styles from './landing.styl'

import {Logo, HatLightOff, HatLightOn, DirtLightOff, DirtLightOn} from '../../assets/landing'

const Landing = () => (
  <div className={styles.Landing}>
    <div className={styles.Hero}>
      <img className={styles.Logo} src="{Logo}"/>
    </div>
  </div>
)

export default Landing

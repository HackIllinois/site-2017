import React from 'react'

import styles from './landing.scss'
console.log(styles.landing)

const Landing = () => (
	<div className={styles.landing}>
    <div className={styles.hero}>
      <img className={styles.logo} src="src/assets/img/landing-logo.png"/>
      <div className={styles['hat-container']}>
        <img className={styles['hat-off']} src="src/assets/img/svg/landing-hat-loff.svg"/>
        <img className={styles['hat-on']} src="src/assets/img/svg/landing-hat-lon.svg"/> 
        <img className={styles.beam} src="src/assets/img/svg/landing-beam.svg"/>
      </div>
      <h1>We'll be Back...</h1>
    </div>
	</div>
)


export default Landing
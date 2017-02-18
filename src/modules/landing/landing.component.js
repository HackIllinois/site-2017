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
        <div className={styles.landing}>
            <Navbar />
            <Registration />
            <About />
            <FAQ />
            <Sponsors />
        </div>
      );
  }
}

export default Landing

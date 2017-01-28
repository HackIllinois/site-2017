import React, { Component } from 'react'
import axios from 'axios'

import styles from './landing.scss'
import Button from '../registration/components/button'

//regex email validation
const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

class Landing extends Component {
  state = {
    email: ""
  }
  onChange = (e) => {
    this.setState({email: e.target.value})
  }
  onSubmit = () => {
    if(!validateEmail(this.state.email)) {
      this.setState({email: ""})
      return;
    }
    axios.post('https://hackillinois-2017.firebaseio.com/users/emails.json', {
        email: this.state.email
      })
    .then(function (response) {
      this.setState({email: ""})
    })
    .catch(function (error) {
      this.setState({email: ""})
    });
  }
  render = () => (
    <div className={styles.landing}>
      <div className={styles.hero}>
        <img className={styles.logo} src="src/assets/img/landing-logo.png"/>
        <div className={styles.dateLabel}>February 24th - 26th</div>
        <div className={styles.host}> Co-hosted by <a href="http://fulcrum-gt.com/"> Fulcrum </a> </div>
        <div className={styles['hat-container']}>
          <img className={styles['hat-off']} src="src/assets/img/svg/landing-hat-loff.svg"/>

        </div>
        <div className={styles.register}>
        <Button register={true} dest='/registration' label='REGISTER NOW' />
        </div>
      </div>
    </div>
  )
}

/*
 <img className={styles['hat-on']} src="src/assets/img/svg/landing-hat-lon.svg"/>
          <img className={styles.beam} src="src/assets/img/svg/landing-beam.svg"/>
          */


export default Landing

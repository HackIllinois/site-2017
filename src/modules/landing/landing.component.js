import React, { Component } from 'react'
import axios from 'axios'

import styles from './landing.scss'

import Button from '../registration/components/button'

import Sponsors from './sponsors.component.js'
import FAQ from './faq.component.js'

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
  render = () =>  {
      return (
        <div className={styles.landing}>
            <div className={styles.lanterns}>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
            </div>
            <div className={styles.hero}>
                <img className={styles.logo} src="src/assets/img/landing-logo.png"/>
                <div className={styles.dateLabel}>February 24th - 26th</div>
                <div className={styles.host}>
                    Co-hosted by <a href="http://fulcrum-gt.com/">Fulcrum</a>
                </div>
                <div className={styles.register}>
                <Button className={styles.mb20} register={true} dest='/registration' label='REGISTER NOW' />
                <div className={styles.login} > Already registered? <a href='/login'> Log in </a> </div>
                </div>
            </div>

            <FAQ />

            <Sponsors />
        </div>
      );
  }
}


export default Landing

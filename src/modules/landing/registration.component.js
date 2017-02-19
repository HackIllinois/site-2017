import React, { Component } from 'react'
import axios from 'axios'

import Button from '../registration/components/button'

import styles from './registration.scss'

const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

class Registration extends Component {
    state = {
      email: ""
    }

    onChange = (e) => {
      this.setState({email: e.target.value})
    }

    onSubmit = () => {
      if (!validateEmail(this.state.email)) {
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
            <div className={styles.hero}>
                <img className={styles.logo} src="src/assets/img/landing-logo.png"/>
                <br /><br />

                <h3 className={styles['hero-title']}>Digging Deeper</h3>
                <h5 className={styles['hero-subtitle']}>February 24th - 26th, 2017</h5>

                <div className={styles.host}>
                    Co-hosted by <a href="http://fulcrum-gt.com/">Fulcrum</a>
                </div>
                <div className={styles.register}>
                <Button className={styles.mb20} register={true} dest='/registration' label='REGISTER NOW' />
                <div className={styles.login} > Already registered? <a href='/login'> Log in </a> </div>
                </div>
            </div>
        );
    }
}

export default Registration
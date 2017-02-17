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
  render = () =>  {
      let sponsorUrls = [
          "src/assets/img/home/sponsors/3red.svg",
          "src/assets/img/home/sponsors/a16z.png",
          "src/assets/img/home/sponsors/akuna.png",
          "src/assets/img/home/sponsors/amadeus.svg",
          "src/assets/img/home/sponsors/att.svg",
          "src/assets/img/home/sponsors/bp.svg",
          "src/assets/img/home/sponsors/capitalone.svg",
          "src/assets/img/home/sponsors/citadel.svg",
          "src/assets/img/home/sponsors/cloudera.svg",
          "src/assets/img/home/sponsors/facebook.svg",
          "src/assets/img/home/sponsors/firebase.png",
          "src/assets/img/home/sponsors/github.png",
          "src/assets/img/home/sponsors/huawei.svg",
          "src/assets/img/home/sponsors/imo.svg",
          "src/assets/img/home/sponsors/johndeere.svg",
          "src/assets/img/home/sponsors/microsoft.svg",
          "src/assets/img/home/sponsors/namecheap.png",
          "src/assets/img/home/sponsors/onenorth.svg",
          "src/assets/img/home/sponsors/qualtrics.svg",
          "src/assets/img/home/sponsors/statefarm.svg",
          "src/assets/img/home/sponsors/twilio.svg",
          "src/assets/img/home/sponsors/viasat.svg",
          "src/assets/img/home/sponsors/yahoo.svg"
      ];
      let sponsorList = sponsorUrls.map((url, key) => {
            return (
                <li className={styles.listItem} key={key}>
                    <a className={styles.listItemLink} href="#">
                        <img className={styles.listItemImage} src={url} />
                    </a>
                </li>
            );
      });


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

            <h4 className={styles.sponsorHeading}>Sponsors</h4>
            <div className={styles.sponsorContainer}>
            <ul className={styles.list}>
                {sponsorList}
            </ul>
            </div>
        </div>
      );
  }
}


export default Landing

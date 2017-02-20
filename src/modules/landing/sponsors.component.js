import React, { Component } from 'react'
import axios from 'axios'

import styles from './sponsors.scss'

class Sponsors extends Component {
  render = () =>  {
      let sponsorUrls = [
          {logo: "src/assets/img/home/sponsors/fulcum.svg", site: "http\://fulcrum-gt.com/"},
          {logo: "src/assets/img/home/sponsors/microsoft.svg", site: "http\://microsoft.com/"},
          {logo: "src/assets/img/home/sponsors/imo.svg", site: "http\://e-imo.com/"},
          {logo: "src/assets/img/home/sponsors/1517.png", site: "http\://1517fund.com/"},
          {logo: "src/assets/img/home/sponsors/3red.svg", site: "http\://3redgroup.com/"},
          {logo: "src/assets/img/home/sponsors/a16z.png", site: "http\://a16z.com/"},
          {logo: "src/assets/img/home/sponsors/akuna.png", site: "http\://akunacapital.com/"},
          {logo: "src/assets/img/home/sponsors/amadeus.svg", site: "http\://amadeus.com/"},
          {logo: "src/assets/img/home/sponsors/aarp.svg", site: "http\://aarp.org"},
          {logo: "src/assets/img/home/sponsors/att.svg", site: "http\://att.com"},
          {logo: "src/assets/img/home/sponsors/bmo.jpg", site: "http\://bmoharris.com/"},
          {logo: "src/assets/img/home/sponsors/bp.svg", site: "http\://bp.com/"},
          {logo: "src/assets/img/home/sponsors/capitalone.svg", site: "http\://capitalone.com/"},
          {logo: "src/assets/img/home/sponsors/citadel.svg", site: "http\://citadel.com/"},
          {logo: "src/assets/img/home/sponsors/cloudera.svg", site: "http\://cloudera.com/"},
          {logo: "src/assets/img/home/sponsors/facebook.svg", site: "http\://facebook.com/"},
          {logo: "src/assets/img/home/sponsors/firebase.png", site: "http\://firebase.google.com/"},
          {logo: "src/assets/img/home/sponsors/google.svg", site: "http\://google.com/"},
          {logo: "src/assets/img/home/sponsors/github.png", site: "http\://github.com/"},
          {logo: "src/assets/img/home/sponsors/huawei.svg", site: "http\://www.huawei.com/us/"},
          {logo: "src/assets/img/home/sponsors/johndeere.svg", site: "http\://deere.com/"},
          {logo: "src/assets/img/home/sponsors/llnl.png", site: "http\://llnl.gov/"},
          {logo: "src/assets/img/home/sponsors/namecheap.png", site: "http\://namecheap.com/"},
          {logo: "src/assets/img/home/sponsors/onenorth.svg", site: "http\://onenorth.com/"},
          {logo: "src/assets/img/home/sponsors/qualtrics.svg", site: "http\://qualtrics.com/"},
          {logo: "src/assets/img/home/sponsors/quikorder.jpeg", site: "http\://quikorder.com/"},
          {logo: "src/assets/img/home/sponsors/techpoint.jpg", site: "http\://techpoint.org/"},
          {logo: "src/assets/img/home/sponsors/statefarm.svg", site: "http\://statefarm.com/"},
          {logo: "src/assets/img/home/sponsors/twilio.png", site: "http\://twilio.com/"},
          {logo: "src/assets/img/home/sponsors/viasat.svg", site: "http\://viasat.com/"},
          {logo: "src/assets/img/home/sponsors/united.svg", site: "http\://united.com/"},
          {logo: "src/assets/img/home/sponsors/yahoo.svg", site: "http\://yahoo.com/"},
          {logo: "src/assets/img/home/sponsors/bitovi.svg", site: "http\://bitovi.com/"}
      ];

      let sponsorList = sponsorUrls.map((obj, key) => {
            let itemStyle = styles.listItem;
            if (obj.logo.includes('fulcum')) {
                itemStyle = styles.topListItem
            }

            if (obj.logo.includes('microsoft') || obj.logo.includes('imo')) {
                itemStyle = styles.secondListItem;
            }

            return (
                <li className={itemStyle} key={key}>
                    <a className={styles.listItemLink} href={obj.site}>
                        <img className={styles.listItemImage} src={obj.logo} />
                    </a>
                </li>
            );
      });

    return (
        <div>
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


export default Sponsors

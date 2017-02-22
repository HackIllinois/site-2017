import React, { Component } from 'react'
import axios from 'axios'

import styles from './sponsors.scss'

class Sponsors extends Component {
  render = () =>  {
      let sponsorUrls = [
          {logo: "src/assets/img/svg/sponsors/fulcrum.svg", site: "http\://fulcrum-gt.com/"},
          {logo: "src/assets/img/svg/sponsors/microsoft.svg", site: "http\://microsoft.com/"},
          {logo: "src/assets/img/svg/sponsors/imo.svg", site: "http\://e-imo.com/"},
          {logo: "src/assets/img/svg/sponsors/1517.svg", site: "http\://1517fund.com/"},
          {logo: "src/assets/img/svg/sponsors/3red.svg", site: "http\://3redgroup.com/"},
          {logo: "src/assets/img/svg/sponsors/a16z.svg", site: "http\://a16z.com/"},
          {logo: "src/assets/img/svg/sponsors/akunacapital.svg", site: "http\://akunacapital.com/"},
          {logo: "src/assets/img/svg/sponsors/amadeus.svg", site: "http\://amadeus.com/"},
          {logo: "src/assets/img/svg/sponsors/aarp.svg", site: "http\://aarp.org"},
          {logo: "src/assets/img/svg/sponsors/at_t.svg", site: "http\://att.com"},
          {logo: "src/assets/img/svg/sponsors/bitovi.svg", site: "http\://bitovi.com/"},
          {logo: "src/assets/img/svg/sponsors/bmo.svg", site: "http\://bmoharris.com/"},
          {logo: "src/assets/img/svg/sponsors/bp.svg", site: "http\://bp.com/"},
          {logo: "src/assets/img/svg/sponsors/capitalone.svg", site: "http\://capitalone.com/"},
          {logo: "src/assets/img/svg/sponsors/citadel.svg", site: "http\://citadel.com/"},
          {logo: "src/assets/img/svg/sponsors/facebook.svg", site: "http\://facebook.com/"},
          {logo: "src/assets/img/svg/sponsors/firebase.svg", site: "http\://firebase.google.com/"},
          {logo: "src/assets/img/svg/sponsors/google.svg", site: "http\://google.com/"},
          {logo: "src/assets/img/svg/sponsors/github.svg", site: "http\://github.com/"},
          {logo: "src/assets/img/svg/sponsors/huawei.svg", site: "http\://www.huawei.com/us/"},
          {logo: "src/assets/img/svg/sponsors/johndeere.svg", site: "http\://deere.com/"},
          {logo: "src/assets/img/svg/sponsors/lawrencelivermore.svg", site: "http\://llnl.gov/"},
          {logo: "src/assets/img/svg/sponsors/namecheap.svg", site: "http\://namecheap.com/"},
          {logo: "src/assets/img/svg/sponsors/onenorth.svg", site: "http\://onenorth.com/"},
          {logo: "src/assets/img/svg/sponsors/qualtrics.svg", site: "http\://qualtrics.com/"},
          {logo: "src/assets/img/svg/sponsors/quikorder.svg", site: "http\://quikorder.com/"},
          {logo: "src/assets/img/svg/sponsors/techpoint.svg", site: "http\://techpoint.org/"},
          {logo: "src/assets/img/svg/sponsors/statefarm.svg", site: "http\://statefarm.com/"},
          {logo: "src/assets/img/svg/sponsors/twilio.svg", site: "http\://twilio.com/"},
          {logo: "src/assets/img/svg/sponsors/viasat.svg", site: "http\://viasat.com/"},
          {logo: "src/assets/img/svg/sponsors/united.svg", site: "http\://united.com/"},
          {logo: "src/assets/img/svg/sponsors/yahoo.svg", site: "http\://yahoo.com/"}
      ];

      let sponsorList = sponsorUrls.map((obj, key) => {
            let itemStyle = styles.listItem;
            if (obj.logo.includes('fulcrum')) {
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

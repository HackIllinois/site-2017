import React, { Component } from 'react'
import axios from 'axios'

import styles from './sponsors.scss'

class Sponsors extends Component {
  render = () =>  {
      let sponsorUrls = [
          {logo: "src/assets/img/home/sponsors/fulcum.svg", site: "http\://fulcrum-gt.com/"},
          {logo: "src/assets/img/home/sponsors/microsoft.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/imo.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/1517.png", site: "#"},
          {logo: "src/assets/img/home/sponsors/3red.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/a16z.png", site: "#"},
          {logo: "src/assets/img/home/sponsors/akuna.png", site: "#"},
          {logo: "src/assets/img/home/sponsors/amadeus.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/aarp.png", site: "#"},
          {logo: "src/assets/img/home/sponsors/att.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/bmo.jpg", site: "#"},
          {logo: "src/assets/img/home/sponsors/bp.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/capitalone.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/citadel.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/cloudera.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/facebook.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/firebase.png", site: "#"},
          {logo: "src/assets/img/home/sponsors/github.png", site: "#"},
          {logo: "src/assets/img/home/sponsors/google.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/johndeere.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/llnl.png", site: "#"},
          {logo: "src/assets/img/home/sponsors/namecheap.png", site: "#"},
          {logo: "src/assets/img/home/sponsors/onenorth.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/qualtrics.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/quikorder.jpeg", site: "#"},
          {logo: "src/assets/img/home/sponsors/techpoint.jpg", site: "#"},
          {logo: "src/assets/img/home/sponsors/quikorder.jpeg", site: "#"},
          {logo: "src/assets/img/home/sponsors/soylent.png", site: "#"},
          {logo: "src/assets/img/home/sponsors/statefarm.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/twilio.png", site: "#"},
          {logo: "src/assets/img/home/sponsors/viasat.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/united.svg", site: "#"},
          {logo: "src/assets/img/home/sponsors/yahoo.svg", site: "#"}
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

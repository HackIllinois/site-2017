import React, { Component } from 'react'
import axios from 'axios'

import styles from './sponsors.scss'

class Sponsors extends Component {
  render = () =>  {
      let sponsorUrls = [
          "src/assets/img/home/sponsors/fulcum.svg",
          "src/assets/img/home/sponsors/microsoft.svg",
          "src/assets/img/home/sponsors/imo.svg",
          "src/assets/img/home/sponsors/1517.png",
          "src/assets/img/home/sponsors/3red.svg",
          "src/assets/img/home/sponsors/a16z.png",
          "src/assets/img/home/sponsors/akuna.png",
          "src/assets/img/home/sponsors/amadeus.svg",
          "src/assets/img/home/sponsors/aarp.png",
          "src/assets/img/home/sponsors/att.svg",
          "src/assets/img/home/sponsors/bmo.jpg",
          "src/assets/img/home/sponsors/bp.svg",
          "src/assets/img/home/sponsors/capitalone.svg",
          "src/assets/img/home/sponsors/citadel.svg",
          "src/assets/img/home/sponsors/cloudera.svg",
          "src/assets/img/home/sponsors/facebook.svg",
          "src/assets/img/home/sponsors/firebase.png",
          "src/assets/img/home/sponsors/github.png",
          "src/assets/img/home/sponsors/google.svg",
          "src/assets/img/home/sponsors/huawei.svg",
          "src/assets/img/home/sponsors/johndeere.svg",
          "src/assets/img/home/sponsors/llnl.png",
          "src/assets/img/home/sponsors/namecheap.png",
          "src/assets/img/home/sponsors/onenorth.svg",
          "src/assets/img/home/sponsors/qualtrics.svg",
          "src/assets/img/home/sponsors/quikorder.jpeg",
          "src/assets/img/home/sponsors/techpoint.jpg",
          "src/assets/img/home/sponsors/soylent.png",
          "src/assets/img/home/sponsors/statefarm.svg",
          "src/assets/img/home/sponsors/twilio.png",
          "src/assets/img/home/sponsors/viasat.svg",
          "src/assets/img/home/sponsors/united.svg",
          "src/assets/img/home/sponsors/yahoo.svg"
      ];

      let sponsorList = sponsorUrls.map((url, key) => {
            let itemStyle = styles.listItem;
            if (url.includes('fulcum')) {
                itemStyle = styles.topListItem
            }

            if (url.includes('microsoft') || url.includes('imo')) {
                itemStyle = styles.secondListItem;
            }

            return (
                <li className={itemStyle} key={key}>
                    <a className={styles.listItemLink} href="#">
                        <img className={styles.listItemImage} src={url} />
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

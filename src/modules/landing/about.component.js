import React, { Component } from 'react'

import styles from './about.scss'

class About extends Component {
  render = () =>  {
      return (
        <div>
            <h4 className={styles.aboutHeading}>About</h4>
            <div className={styles.aboutContainer}>
                <h5>WELCOME TO HACKILLINOIS!</h5>
                <p>
                    Since its inception in 2014, HackIllinois has pushed the boundaries to create an exceptional
                    and dynamic hacking culture. Now, it’s time to give back to the community.
                    HackIllinois 2017 is the first open source-focused collegiate hackathon!
                </p>
                <h5>OUR EVENT</h5>
                <p>
                    HackIllinois is unlike any other hackathon you’ve been to. We focus on collaboration and sustainability rather than competition. For 36 hours, our attendees will innovate, design, and improve the open source community. This year, attendees can choose from two tracks:
                    <br/>
                </p>
                <ul>
                    <li><b>CONTRIBUTE</b> allows for each group to be mentored while working on existing open source projects, providing a welcoming environment to make their first additions to the community.</li>
                    <li><b>CREATE</b> encourages students to create a brand new open source project with the intention of building foundation that others can build upon after the event.</li>
                </ul>
                <h5>TEAM</h5>
                <p>
                    We’re a team of driven individuals working towards the goal of inspiring and empowering creative minds to build anything they can imagine.
                </p>
            </div>

        </div>
      );
  }
}


export default About

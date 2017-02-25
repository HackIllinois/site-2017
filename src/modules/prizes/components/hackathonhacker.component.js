import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class HackathonHacker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showData: false
        };
        this.display = this.display.bind(this);
    }

    display = () => {
        this.setState({showData: !this.state.showData});
    };

    render = () => (

        <div className={styles['prizes-body-panel']}>
            <div id={styles.header2} onClick={this.display} className={styles['prizes-body-panel-header-1']}>
                <h4 className={styles['prizes-body-panel-title']}>The Hackathon Hacker</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-subtitle']}>
                    <center><i>“Ask not what hackathons can do for you, but what you can do for hackathons.”</i></center>
                    <br/>
                    Open source projects in this category are designed to improve the hackathon community as a whole.
                    They provide tools to facilitate organizing hackathons, hack-nights, make-athons, you name it.
                    Excellent examples include HackMIT’s open source projects (found at <a href="code.hackmit.org">code.hackmit.org</a>), which include tools for hackathon mentor queuing and project judging.
                    The future of the hackathon rests in the hands of The Hackathon Hacker.
                </h5>
                <br/><br/>
            </div> : null }
        </div>

    )
}

export default HackathonHacker
import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class Twilio extends Component {

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
            <div id={styles.header5} onClick={this.display} className={styles['prizes-body-panel-header-1']}>
                <h4 className={styles['prizes-body-panel-title']}>Civic Spirit</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-subtitle']}>Open source projects in this category are
                    focused on exploring Open Data and improving the community through assisting public technology
                    initiatives. Prime candidates for projects can be found on <a href="https://code.gov/">Code.gov</a> and open data projects such
                    as the <a href="https://data.cityofchicago.org/">Chicago city data</a>. Embody your Civic Spirit.

                    <br/><br/>
                </h5>
                    <h4>Presented by <a href="https://www.twilio.com/">Twilio</a>.</h4>
                <br />
            </div> : null }
        </div>

    )
}

export default Twilio
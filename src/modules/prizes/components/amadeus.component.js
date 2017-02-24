import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class Amadeus extends Component {

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
            <div id={styles.header1} onClick={this.display} className={styles['prizes-body-panel-header-1']}>
                <h4 className={styles['prizes-body-panel-title']}>Amadeus</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-title']}>Small World</h5>
                <h6 className={styles['prizes-body-panel-content-subtitle']}>This category is for open source projects
                    that seek to shape the future of travel. By making it easier to explore, plan an adventure, or
                    bring a community together, this project makes it a Small World.
                    <br/><br/>
                    Presented by <a href="www.amadeus.com">Amadeus</a>. </h6>
                <br />
            </div> : null }
        </div>

    )
}

export default Amadeus
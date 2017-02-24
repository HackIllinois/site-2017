import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class Fulcrum extends Component {

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
                <h4 className={styles['prizes-body-panel-title']}>One More Hour In The Day</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-subtitle']}>
                    Life is too short to be doing the repetitive. This category is for open source technology that
                    promotes efficiency and enables people to do more with their time. Imagine...
                    One More Hour In The Day.
                    <br /><br />
                </h5>
                    <h4>Presented by <a href="http://fulcrum-gt.com/">Fulcrum-GT</a>.</h4>
                <br />
            </div> : null }
        </div>

    )
}

export default Fulcrum
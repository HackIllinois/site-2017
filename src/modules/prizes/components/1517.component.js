import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class One517 extends Component {

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
            <div id={styles.header6} onClick={this.display} className={styles['prizes-body-panel-header-1']}>
                <h4 className={styles['prizes-body-panel-title']}>1517 Grant Fund</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-subtitle']}>
                    1517, in wishing to support the open source industry, is providing a 1K grant and 5K in AWS credits
                    as well as ongoing mentorship to three teams that create unique and creative products that
                    they'd like to bring to market.

                <br/><br/></h5>
                <h4>Presented by <a href="http://www.1517fund.com/">1517</a>.</h4>
                <br />
            </div> : null }
        </div>

    )
}

export default One517
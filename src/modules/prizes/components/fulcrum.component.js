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
                <h4 className={styles['prizes-body-panel-title']}>Don't Discard The Human</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-subtitle']}>
                    Tech that brings about efficiency and requires human participation to achieve more meaningful, authentic, otherwise harder to replicate solutions.
                    'Best Automation with a Human-Centric Component'.
                    <br /><br />
                </h5>
                    <h5>Presented by <a href="http://fulcrum-gt.com/">Fulcrum-GT</a>.</h5>
                <br />
            </div> : null }
        </div>

    )
}

export default Fulcrum
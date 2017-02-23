import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class Facebook extends Component {

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
            <div onClick={this.display} className={styles['prizes-body-panel-header-1']}>
                <h4 className={styles['prizes-body-panel-title']}>Facebook</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-title']}>Prize Name</h5>
                <h6 className={styles['prizes-body-panel-content-subtitle']}>Prize Description</h6>
                <br />
            </div> : null }
        </div>

    )
}

export default Facebook
import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class Google extends Component {

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
                <h4 className={styles['prizes-body-panel-title']}>Google</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-title']}>Everyday Usefulness</h5>
                <h6 className={styles['prizes-body-panel-content-subtitle']}>
                    Open source projects in this category improve daily life and include projects in health and wellness,
                    home automation, and more. In an era full of life hacks, this category rewards Everyday Usefulness.
                    <br /><br />
                    Presented by <a href="https://google.com/">Google</a>.</h6>
                <br />
            </div> : null }
        </div>

    )
}

export default Google
import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class MakeSchool extends Component {

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
                <h4 className={styles['prizes-body-panel-title']}>Make School Scholarship</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-subtitle']}>This prize will awarded to the team that works on Make School's favorite contribution.

                <br/><br/>
                </h5>
                <h5>Presented by <a href="https://www.makeschool.com/">Make School</a>.</h5>
                <br />
            </div> : null }
        </div>

    )
}

export default MakeSchool
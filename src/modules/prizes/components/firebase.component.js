import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class Firebase extends Component {

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
                <h4 className={styles['prizes-body-panel-title']}>Firebase</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-title']}>Best Use Of Firebase in Supporting Open Source Technology</h5>
                <h6 className={styles['prizes-body-panel-content-subtitle']}>
                    This category is for open source projects that facilitate the use of Firebase for other Open Source
                    developers. Examples include Firepad, an open source collaborative code and text editor
                    powered by Firebase.
                    <br /><br />
                    Presented by <a href="https://firebase.google.com/">Firebase</a>.</h6>
                <br />
            </div> : null }
        </div>

    )
}

export default Firebase
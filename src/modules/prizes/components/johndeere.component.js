import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class JohnDeere extends Component {

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
            <div id={styles.header3} onClick={this.display} className={styles['prizes-body-panel-header-1']}>
                <h4 className={styles['prizes-body-panel-title']}>John Deere</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-title']}>Feed, Clothe, and Shelter</h5>
                <h6 className={styles['prizes-body-panel-content-subtitle']}>
                    Projects in this category are ready to rapidly deploy and help feed, clothe, and shelter the globe.
                    Example projects include building an open source framework that accelerates the development of
                    agricultural data applications, open source construction resource management systems, or open
                    tools for sustainable forestry.
                    <br /><br/>
                    Presented by <a href="https://www.deere.com/en_US/regional_home.page">John Deere</a>.</h6>
                <br />
            </div> : null }
        </div>

    )
}

export default JohnDeere
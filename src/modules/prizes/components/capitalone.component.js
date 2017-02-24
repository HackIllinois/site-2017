import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class CapitalOne extends Component {

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
            <div id={styles.header4} onClick={this.display} className={styles['prizes-body-panel-header-1']}>
                <h4 className={styles['prizes-body-panel-title']}>Show Me the Money</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-subtitle']}>
                    This category is for projects which make financial markets and information easier to access and understand for the average customer. 
                    An example could include a toolkit to visualize market data into easily readable
                    information.
                </h5>
                <br/><br/>
                <h4>Presented by <a href="https://www.capitalone.com/">Capital One</a>.</h4>
                <br />
            </div> : null }
        </div>

    )
}

export default CapitalOne
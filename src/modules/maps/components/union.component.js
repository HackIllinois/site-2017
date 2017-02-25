import React, { Component } from 'react'
import axios from 'axios'

import styles from './map-panel.scss'

class Union extends Component {

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
        <div className={styles['maps-body-panel']}>
            <div id={styles.header4} onClick={this.display} className={styles['maps-body-panel-header-1']}>
                <h4 className={styles['maps-body-panel-title']}>Illini Union Building</h4>
                <img className={styles['maps-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['maps-body-panel-content']}>
                <br />
                <img src="src/assets/img/svg/maps/union_firstfloor.svg" />
                <br />
            </div> : null }
        </div>
    )
}

export default Union
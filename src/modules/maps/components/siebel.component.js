import React, { Component } from 'react'
import axios from 'axios'

import styles from './map-panel.scss'

class Siebel extends Component {

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
            <div id={styles.header6} onClick={this.display} className={styles['maps-body-panel-header-1']}>
                <h4 className={styles['maps-body-panel-title']}>Siebel Center</h4>
                <img className={styles['maps-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['maps-body-panel-content']}>
                <br />
                <img src="src/assets/img/svg/maps/siebel_basement.svg" />
                <img src="src/assets/img/svg/maps/siebel_firstfloor.svg" />
                <img src="src/assets/img/svg/maps/siebel_secondfloor.svg" />
                <img src="src/assets/img/svg/maps/siebel_thirdfloor.svg" />
                <img src="src/assets/img/svg/maps/siebel_fourthfloor.svg" />
                <br />
            </div> : null }
        </div>

    )
}

export default Siebel
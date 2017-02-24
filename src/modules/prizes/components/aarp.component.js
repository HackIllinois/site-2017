import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class AARP extends Component {

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
                <h4 className={styles['prizes-body-panel-title']}>Take Care</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-subtitle']}>
                    This category is a prize for projects which help enable caregivers and improve the quality of
                    life for seniors everywhere. An example could include developing an online caregiver marketplace. 
                    <br/>
                    <a href="https://docs.google.com/document/d/1KJsfMf5cSHaokXdPPCNZ2mc5mbu6yAn1WphHkKlTe0s/edit?usp=sharing">Full Prize Description here</a>
                    <br /><br /></h5>
                    <h5>Presented by <a href="http://www.aarp.org/">AARP</a>.</h5>
                <br />
            </div> : null }
        </div>

    )
}

export default AARP
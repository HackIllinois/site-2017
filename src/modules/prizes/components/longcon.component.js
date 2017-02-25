import React, { Component } from 'react'
import axios from 'axios'

import styles from './prize-panel.scss'

class LongCon extends Component {

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
                <h4 className={styles['prizes-body-panel-title']}>The Long Con</h4>
                <img className={styles['prizes-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['prizes-body-panel-content']}>
                <br />
                <h5 className={styles['prizes-body-panel-content-subtitle']}>
                    This category is a prize awarded to an open source project six months after its creation at
                    HackIllinois 2017. Judging for this category will be based on the success and sustainability of
                    the project, as well as the community that has formed around it. Rome wasn’t built in 36 hours;
                    the real value is in The Long Con.

                </h5>
                <br/><br/>
            </div> : null }
        </div>

    )
}

export default LongCon
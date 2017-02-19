import React, { Component } from 'react'
import axios from 'axios'

import styles from './travel-panel.scss'

class Florida extends Component {

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
        <div className={styles['travel-body-panel']}>

            <div onClick={this.display} className={styles['travel-body-panel-header-2']}>
                <h4 className={styles['travel-body-panel-title']}>Florida <span className={styles['arrow']}>&#8644;</span> Georgia Tech <span className={styles['arrow']}>&#8644;</span> HackIllinois</h4>
                <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
            </div>

            { this.state.showData ? <div id="content-2" className={styles['travel-body-panel-content']}>
                <br />
                <h5 className={styles['travel-body-panel-content-title']}>To UIUC</h5>
                <table>
                    <tbody>
                    <tr>
                        <td>Pickup Date</td>
                        <td>February 24, 2017</td>
                    </tr>

                    <tr>
                        <td>Pickup Address #1</td>
                        <td>UF Commuter Lot, 1950 Gale Lemerand Drive, Gainesville, FL 32603 at 2:30 AM CST</td>
                    </tr>

                    <tr>
                        <td>Pickup Address #2</td>
                        <td>Georgia Tech, 266 4th St NW, Atlanta, GA 30332 at 8:30 AM CST</td>
                    </tr>

                    <tr>
                        <td>Destination Address</td>
                        <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801 at 6:30 PM CST</td>
                    </tr>

                    <tr>
                        <td>Bus Capacity</td>
                        <td>55 people</td>
                    </tr>
                    </tbody>
                </table>

                <h5 className={styles['travel-body-panel-content-title']}>From UIUC</h5>
                <table>
                    <tbody>
                    <tr>
                        <td>Pickup Date</td>
                        <td>February 26, 2017</td>
                    </tr>

                    <tr>
                        <td>Pickup Address</td>
                        <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801 at 4:00 PM CST</td>
                    </tr>

                    <tr>
                        <td>Destination Address #1</td>
                        <td>Georgia Tech, 266 4th St NW, Atlanta, GA 30332 at 3:00 AM CST</td>
                    </tr>

                    <tr>
                        <td>Destination Address #2</td>
                        <td>UF Commuter Lot, 1950 Gale Lemerand Drive, Gainesville, FL 32603 at 8:00 AM CST</td>
                    </tr>

                    <tr>
                        <td>Bus Capacity</td>
                        <td>55 people</td>
                    </tr>
                    </tbody>
                </table>
            </div> : null }
        </div>
    )
}

export default Florida
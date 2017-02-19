import React, { Component } from 'react'
import axios from 'axios'

import styles from './travel-panel.scss'

class Purdue extends Component {

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
            <div onClick={this.display} className={styles['travel-body-panel-header-1']}>
                <h4 className={styles['travel-body-panel-title']}>Purdue <span
                    className={styles['arrow']}>&#8644;</span> HackIllinois</h4>
                <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg"/>
            </div>

            { this.state.showData ? <div id="content-1" className={styles['travel-body-panel-content']}>
                    <br />
                    <h5 className={styles['travel-body-panel-content-title']}>To UIUC</h5>
                    <table>
                        <tbody>
                        <tr>
                            <td>Pickup Date</td>
                            <td>February 24, 2017</td>
                        </tr>

                        <tr>
                            <td>Pickup Address</td>
                            <td>Purdue Univ, Lawson Hall of Computer Science, 305 N University St, West Lafayette, IN
                                47907 at 3:15 PM CST
                            </td>
                        </tr>

                        <tr>
                            <td>Destination Address</td>
                            <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801 at 5:00 PM CST</td>
                        </tr>

                        <tr>
                            <td>Bus Capacity</td>
                            <td>2 busses; 110 people total</td>
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
                            <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801 at 5:00 PM CST</td>
                        </tr>

                        <tr>
                            <td>Destination Address</td>
                            <td>Purdue Univ, Lawson Hall of Computer Science, 305 N University St, West Lafayette, IN
                                47907 at 6:30 PM CST.
                            </td>
                        </tr>

                        <tr>
                            <td>Bus Capacity</td>
                            <td>2 busses; 110 people total</td>
                        </tr>
                        </tbody>
                    </table>
                </div> : null }
        </div>

    )
}

export default Purdue
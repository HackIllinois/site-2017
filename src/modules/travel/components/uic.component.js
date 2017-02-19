import React, { Component } from 'react'
import axios from 'axios'

import styles from './travel-panel.scss'

class UIC extends Component {

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
            <div onClick={() => this.display(6)} className={styles['travel-body-panel-header-6']}>
                <h4 className={styles['travel-body-panel-title']}>UIC <span className={styles['arrow']}>&#8644;</span> UChicago <span className={styles['arrow']}>&#8644;</span> IIT <span className={styles['arrow']}>&#8644;</span> HackIllinois</h4>
                <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
            </div>

            { this.state.showData ? <div id="content-6" className={styles['travel-body-panel-content']}>
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
                        <td>University of Illinois at Chicago, 851 S. Morgan (m/c 152),
                            Chicago, IL 60607 at 1:00 PM CST</td>
                    </tr>

                    <tr>
                        <td>Pickup Address #2</td>
                        <td>University of Chicago, Joseph Regenstein Library, 1100 E 57th St,
                            Chicago, IL 60637 at 1:45 PM CST</td>
                    </tr>

                    <tr>
                        <td>Pickup Address #3</td>
                        <td>Illinois Institute of Technology, McCormic Student Village, 3241 South
                            Wabash Ave, Chicago, IL 60616 at 2:15 PM CST</td>
                    </tr>

                    <tr>
                        <td>Destination Address</td>
                        <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801 at 4:45 PM CST</td>
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
                        <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801 at 5:15 PM CST</td>
                    </tr>

                    <tr>
                        <td>Destination Address #1</td>
                        <td>Illinois Institute of Technology, McCormic Student Village, 3241 South
                            Wabash Ave, Chicago, IL 60616 at 7:45 PM CST</td>
                    </tr>

                    <tr>
                        <td>Destination Address #2</td>
                        <td>University of Chicago, Joseph Regenstein Library, 1100 E 57th St,
                            Chicago, IL 60637 at 8:15 PM CST</td>
                    </tr>

                    <tr>
                        <td>Destination Address #3</td>
                        <td>University of Illinois at Chicago, 851 S. Morgan (m/c 152),
                            Chicago, IL 60607 at 8:45 PM CST</td>
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

export default UIC
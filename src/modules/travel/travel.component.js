import React, { Component } from 'react'
import axios from 'axios'

import styles from './travel.scss'

class Travel extends Component {
    render = () => (
        <div className={styles['travel']}>

            <div className={styles['travel-header']}>

                <img className={styles['travel-header-logo']} src="src/assets/img/svg/landing-logo.svg" /> <br/><br />
                <h3 className={styles['travel-header-title']}>Travel</h3>
                <h5 className={styles['travel-header-subtitle']}>HackIllinois 2017 will be sending busses to the following schools!</h5>
                <br />
            </div>

            <div className={styles['travel-body']}>

                <div className={styles['travel-body-panel']}>
                    <div className={styles['travel-body-panel-header']}>
                        <h4 className={styles['travel-body-panel-title']}>Purdue &#8644; HackIllinois</h4> <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                        <div className={styles['travel-body-panel-accent-1']} />
                    </div>

                    <br />
                    <div className={styles['travel-body-panel-content']}>
                        <h5 className={styles['travel-body-panel-content-title']}>To UIUC</h5>
                        <table>
                            <tr>
                                <td>Pickup Date</td>
                                <td>February 24, 2017 - 3:15 PM CST</td>
                            </tr>

                            <tr>
                                <td>Pickup Address</td>
                                <td>Purdue Univ, Lawson Hall of Computer Science, 305 N University St, West Lafayette, IN 47907</td>
                            </tr>

                            <tr>
                                <td>Destination Address</td>
                                <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
                            </tr>

                            <tr>
                                <td>Bus Capacity</td>
                                <td>110 people</td>
                            </tr>
                        </table>

                        <h5 className={styles['travel-body-panel-content-title']}>From UIUC</h5>
                        <table>
                            <tr>
                                <td>Pickup Date</td>
                                <td>February 26, 2017 - 5:00 PM CST</td>
                            </tr>

                            <tr>
                                <td>Pickup Address</td>
                                <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
                            </tr>

                            <tr>
                                <td>Destination Address</td>
                                <td>Purdue Univ, Lawson Hall of Computer Science, 305 N University St, West Lafayette, IN 47907</td>
                            </tr>

                            <tr>
                                <td>Bus Capacity</td>
                                <td>110 people</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className={styles['travel-body-panel']}>
                    <h4 className={styles['travel-body-panel-title']}>Florida &#8644; Georgia Tech &#8644; HackIllinois</h4> <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                    <div className={styles['travel-body-panel-accent-2']} />

                    <div className={styles['travel-body-panel-content']}>
                        <br />
                        <h5 className={styles['travel-body-panel-content-title']}>To UIUC</h5>
                        <table>
                            <tr>
                                <td>Pickup Date</td>
                                <td>February 24, 2017 - 2:30 AM CST</td>
                            </tr>

                            <tr>
                                <td>Pickup Address</td>
                                <td>UF Commuter Lot, 1950 Gale Lemerand Drive, Gainesville, FL 32603</td>
                            </tr>

                            <tr>
                                <td>Destination Address</td>
                                <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
                            </tr>

                            <tr>
                                <td>Bus Capacity</td>
                                <td>110 people per bus; two busses will be sent.</td>
                            </tr>
                        </table>

                        <h5 className={styles['travel-body-panel-content-title']}>From UIUC</h5>
                        <table>
                            <tr>
                                <td>Pickup Date</td>
                                <td>February 26, 2017 - 5:00 PM CST</td>
                            </tr>

                            <tr>
                                <td>Pickup Address</td>
                                <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
                            </tr>

                            <tr>
                                <td>Destination Address</td>
                                <td>Purdue Univ, Lawson Hall of Computer Science, 305 N University St, West Lafayette, IN 47907</td>
                            </tr>

                            <tr>
                                <td>Bus Capacity</td>
                                <td>110 people per bus; two busses will be sent.</td>
                            </tr>
                        </table>
                    </div>

                </div>

                <div className={styles['travel-body-panel']}>
                    <h4 className={styles['travel-body-panel-title']}>Michigan</h4> <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                    <div className={styles['travel-body-panel-accent-3']} />
                </div>

                <div className={styles['travel-body-panel']}>
                    <h4 className={styles['travel-body-panel-title']}>Wisconsin</h4> <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                    <div className={styles['travel-body-panel-accent-4']} />
                </div>

                <div className={styles['travel-body-panel']}>
                    <h4 className={styles['travel-body-panel-title']}>Northwestern + DePaul</h4> <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                    <div className={styles['travel-body-panel-accent-5']} />
                </div>

                <div className={styles['travel-body-panel']}>
                    <h4 className={styles['travel-body-panel-title']}>UIC + UCHI + IIT</h4> <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                    <div className={styles['travel-body-panel-accent-5']} />
                </div>


            </div>
            <br />

            <div className={styles['travel-footer']}>
                <h5>Questions? Email us at contact@hackillinois.org!</h5>
            </div>


        </div>
    )
}

export default Travel

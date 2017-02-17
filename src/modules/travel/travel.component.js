import React, { Component } from 'react'
import axios from 'axios'

import styles from './travel.scss'

class Travel extends Component {

    display = (id) => {
        console.log(id);
    };

    render = () => (
        <div className={styles['travel']}>

            <div className={styles['travel-header']}>

                <img className={styles['travel-header-logo']} src="src/assets/img/svg/landing-logo.svg" /> <br/><br />
                <h3 className={styles['travel-header-title']}>Travel</h3>
                <h5 className={styles['travel-header-subtitle']}>HackIllinois 2017 will be sending busses to the following schools:</h5>
                <br />

            </div>

            <div className={styles['travel-body']}>

                <div className={styles['travel-body-panel']}>
                    <div onClick={() => this.display(1)} className={styles['travel-body-panel-header-1']}>
                        <h4 className={styles['travel-body-panel-title']}>Purdue <span className={styles['arrow']}>&#8644;</span> HackIllinois</h4>
                        <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                    </div>

                    <div className={styles['travel-body-panel-content']}>
                        <br />
                        <h5 className={styles['travel-body-panel-content-title']}>To UIUC</h5>
                        <table>
                            <tbody>
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
                                    <td>2 busses; 110 people total</td>
                                </tr>
                            </tbody>
                        </table>

                        <h5 className={styles['travel-body-panel-content-title']}>From UIUC</h5>
                        <table>
                            <tbody>
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
                                    <td>2 busses; 110 people total</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={styles['travel-body-panel']}>

                    <div onClick={() => this.display(2)} className={styles['travel-body-panel-header-2']}>
                        <h4 className={styles['travel-body-panel-title']}>Florida <span className={styles['arrow']}>&#8644;</span> Georgia Tech <span className={styles['arrow']}>&#8644;</span> HackIllinois</h4>
                        <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                    </div>

                    <div className={styles['travel-body-panel-content']}>
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
                                    <td>UF Commuter Lot, 1950 Gale Lemerand Drive, Gainesville, FL 32603 - 2:30 AM CST</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address #2</td>
                                    <td>Georgia Tech, 266 4th St NW, Atlanta, GA 30332 [ Time TBD ]</td>
                                </tr>

                                <tr>
                                    <td>Destination Address</td>
                                    <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
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
                                    <td>February 26, 2017 - 5:00 PM CST</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address</td>
                                    <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
                                </tr>

                                <tr>
                                    <td>Destination Address #1</td>
                                    <td>Georgia Tech, 266 4th St NW, Atlanta, GA 30332</td>
                                </tr>

                                <tr>
                                    <td>Destination Address #2</td>
                                    <td>UF Commuter Lot, 1950 Gale Lemerand Drive, Gainesville, FL 32603</td>
                                </tr>

                                <tr>
                                    <td>Bus Capacity</td>
                                    <td>55 people</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>



                <div className={styles['travel-body-panel']}>
                    <div onClick={() => this.display(3)} className={styles['travel-body-panel-header-3']}>
                        <h4 className={styles['travel-body-panel-title']}>Michigan State <span className={styles['arrow']}>&#8644;</span> UMichigan <span className={styles['arrow']}>&#8644;</span> HackIllinois</h4>
                        <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                    </div>

                    <div className={styles['travel-body-panel-content']}>

                        <br />
                        <h5 className={styles['travel-body-panel-content-title']}>To UIUC</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Pickup Date</td>
                                    <td>February 24, 2017 - 10:00 AM CST</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address #1</td>
                                    <td>Michigan State, MI</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address #2</td>
                                    <td>University of Michigan, MI</td>
                                </tr>

                                <tr>
                                    <td>Destination Address</td>
                                    <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
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
                                    <td>February 26, 2017 - 5:00 PM CST</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address</td>
                                    <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
                                </tr>

                                <tr>
                                    <td>Destination Address #1</td>
                                    <td>University of Michigan, MI</td>
                                </tr>

                                <tr>
                                    <td>Destination Address #2</td>
                                    <td>Michigan State, MI</td>
                                </tr>

                                <tr>
                                    <td>Bus Capacity</td>
                                    <td>55 people</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>


                <div className={styles['travel-body-panel']}>
                    <div onClick={() => this.display(4)} className={styles['travel-body-panel-header-4']}>
                        <h4 className={styles['travel-body-panel-title']}>Wisconsin <span className={styles['arrow']}>&#8644;</span> HackIllinois</h4>
                        <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                    </div>

                    <div className={styles['travel-body-panel-content']}>
                        <br />
                        <h5 className={styles['travel-body-panel-content-title']}>To UIUC</h5>
                        <table>
                            <tbody>

                                <tr>
                                    <td>Pickup Date</td>
                                    <td>February 24, 2017 - 10:00 AM CST</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address</td>
                                    <td>University of Wisconsin, 1210 West Dayton St, Madison, WI 53706</td>
                                </tr>

                                <tr>
                                    <td>Destination Address</td>
                                    <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
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
                                    <td>February 26, 2017 - 5:00 PM CST</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address</td>
                                    <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
                                </tr>

                                <tr>
                                    <td>Destination Address</td>
                                    <td>University of Wisconsin, 1210 West Dayton St, Madison, WI 53706</td>
                                </tr>

                                <tr>
                                    <td>Bus Capacity</td>
                                    <td>55 people</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className={styles['travel-body-panel']}>
                    <div onClick={() => this.display(5)} className={styles['travel-body-panel-header-5']}>
                        <h4 className={styles['travel-body-panel-title']}>Northwestern <span className={styles['arrow']}>&#8644;</span> DePaul <span className={styles['arrow']}>&#8644;</span> HackIllinois</h4>
                        <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                    </div>

                    <div className={styles['travel-body-panel-content']}>
                        <br />
                        <h5 className={styles['travel-body-panel-content-title']}>To UIUC</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Pickup Date</td>
                                    <td>February 24, 2017 - 1:00 PM CST</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address #1</td>
                                    <td>Northwestern University, 2311 Campus Dr, Evanston, IL 60208</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address #2</td>
                                    <td>DePaul University, 243 S Wabash Ave, Chicago, IL 60604</td>
                                </tr>

                                <tr>
                                    <td>Destination Address</td>
                                    <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
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
                                    <td>February 26, 2017 - 5:00 PM CST</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address</td>
                                    <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
                                </tr>

                                <tr>
                                    <td>Destination Address #1</td>
                                    <td>DePaul University, 243 S Wabash Ave, Chicago, IL 60604</td>
                                </tr>

                                <tr>
                                    <td>Destination Address #2</td>
                                    <td>Northwestern University, 2311 Campus Dr, Evanston, IL 60208</td>
                                </tr>

                                <tr>
                                    <td>Bus Capacity</td>
                                    <td>55 people</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className={styles['travel-body-panel']}>
                    <div onClick={() => this.display(6)} className={styles['travel-body-panel-header-6']}>
                        <h4 className={styles['travel-body-panel-title']}>UIC <span className={styles['arrow']}>&#8644;</span> UChicago <span className={styles['arrow']}>&#8644;</span> IIT <span className={styles['arrow']}>&#8644;</span> HackIllinois</h4>
                        <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
                    </div>

                    <div className={styles['travel-body-panel-content']}>
                        <br />
                        <h5 className={styles['travel-body-panel-content-title']}>To UIUC</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Pickup Date</td>
                                    <td>February 24, 2017 - 2:30 AM CST</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address #1</td>
                                    <td>University of Illinois at Chicago, 851 S. Morgan (m/c 152),
                                        Chicago, IL 60607</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address #2</td>
                                    <td>University of Chicago, Joseph Regenstein Library, 1100 E 57th St,
                                        Chicago, IL 60637</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address #3</td>
                                    <td>Illinois Institute of Technology, McCormic Student Village, 3241 South
                                        Wabash Ave, Chicago, IL 60616</td>
                                </tr>

                                <tr>
                                    <td>Destination Address</td>
                                    <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
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
                                    <td>February 26, 2017 - 5:00 PM CST</td>
                                </tr>

                                <tr>
                                    <td>Pickup Address</td>
                                    <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801</td>
                                </tr>

                                <tr>
                                    <td>Destination Address #1</td>
                                    <td>Illinois Institute of Technology, McCormic Student Village, 3241 South
                                        Wabash Ave, Chicago, IL 60616</td>
                                </tr>

                                <tr>
                                    <td>Destination Address #2</td>
                                    <td>University of Chicago, Joseph Regenstein Library, 1100 E 57th St,
                                        Chicago, IL 60637</td>
                                </tr>

                                <tr>
                                    <td>Destination Address #3</td>
                                    <td>University of Illinois at Chicago, 851 S. Morgan (m/c 152),
                                        Chicago, IL 60607</td>
                                </tr>

                                <tr>
                                    <td>Bus Capacity</td>
                                    <td>55 people</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>


            </div>
            <br />

            <div className={styles['travel-footer']}>
                <h5>Questions? Email us at contact@hackillinois.org!</h5>
                <br />
            </div>
        </div>
    )
}

export default Travel

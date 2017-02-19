import React, { Component } from 'react'
import axios from 'axios'

import styles from './travel-panel.scss'

class Northwestern extends Component {


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
            <div onClick={() => this.display(5)} className={styles['travel-body-panel-header-5']}>
                <h4 className={styles['travel-body-panel-title']}>Northwestern <span className={styles['arrow']}>&#8644;</span> DePaul <span className={styles['arrow']}>&#8644;</span> HackIllinois</h4>
                <img className={styles['travel-body-caret']} src="src/assets/img/down-arrow.svg" />
            </div>

            { this.state.showData ? <div id="content-5" className={styles['travel-body-panel-content']}>
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
                        <td>Northwestern University, 2311 Campus Dr, Evanston, IL 60208 at 1:00 PM CST</td>
                    </tr>

                    <tr>
                        <td>Pickup Address #2</td>
                        <td>DePaul University, 243 S Wabash Ave, Chicago, IL 60604 at 2:00 PM CST</td>
                    </tr>

                    <tr>
                        <td>Destination Address</td>
                        <td>Siebel Center for Computer Science, 201 N Goodwin Ave, Urbana, IL 61801 at 4:30 PM CST</td>
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
                        <td>DePaul University, 243 S Wabash Ave, Chicago, IL 60604 at 7:45 PM CST</td>
                    </tr>

                    <tr>
                        <td>Destination Address #2</td>
                        <td>Northwestern University, 2311 Campus Dr, Evanston, IL 60208 at 8:45 PM CST</td>
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

export default Northwestern
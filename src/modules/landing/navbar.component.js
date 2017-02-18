import React, { Component } from 'react'
import axios from 'axios'

import styles from './navbar.scss'

class Navbar extends Component {
    render = () =>  {
        return (
            <div className={styles.lanterns}>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
                <div className={styles.lanternUnit}></div>
            </div>
        );
    }
}


export default Navbar

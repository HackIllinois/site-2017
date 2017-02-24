import React, { Component } from 'react'

import styles from './dashboard.scss'

class Dashboard extends Component {
  render = () => (
        <div className={styles['']}>
            <img
                className={styles['dashboard']}
                src="src/assets/img/svg/TV_background.svg"/>
        </div>
  )
}

export default Dashboard

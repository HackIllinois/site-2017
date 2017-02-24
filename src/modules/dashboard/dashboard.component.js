import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'

import styles from './dashboard.scss'

class Dashboard extends Component {
  render = () => (
      <div className={styles['dashboard']}>
      <Clock />
      </div>
  )
}

export default Dashboard

@inject('dashboardStore') @observer
class Clock extends Component  {

  render = () => {
    return (
      <div className={styles['clock-container']}>
      	<div className={styles['time-header']}> Current Time </div>
        <div className={styles['time']}>{this.props.dashboardStore.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}
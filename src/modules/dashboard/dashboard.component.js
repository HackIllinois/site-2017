import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'

import styles from './dashboard.scss'

const sponsors1 = ['a16z','yahoo', 'qualtrics', 'viasat', 'united', 'twilio', 'techpoint', 'statefarm', 'quikorder']
const sponsors2 = ['fulcrum', 'microsoft', '3red', 'imo', '1517', 'cloudera', 'a16z']
const sponsors3 = ['onenorth', 'namecheap', 'facebook', 'lawrencelivermore', 'johndeere', 'google', 'huawei', 'github', 'firebase']
const sponsors4 = ['akunacapital', 'amadeus', 'aarp', 'at_t', 'bitovi', 'bmo', 'bp', 'capitalone', 'citadel']

class Dashboard extends Component {
  render = () => (
      <div className={styles['dashboard']}>
      <Sponsors/>
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

class Events extends Component {
	render = () => (
		<div className={styles['event-container']}>
			<div className={styles['schedule-header']}> SCHEDULE </div>
			<div className={styles['sub-event-header']}> Happening Now </div>
			<div className={styles['sub-event-header']}> Upcoming </div>
			<div> </div>
		</div>
	)
}

class Sponsors extends Component {
	render = () => (
		<div className={styles['sponsors-container']}> 
		{sponsors2.map((s) => (<img className={s == 'fulcrum' ?  styles['fulcrum-sponsor'] : styles['normal-sponsor']} src={'../src/assets/img/svg/sponsors/' + s + '.svg'} />))}
		</div>
	)

	
}
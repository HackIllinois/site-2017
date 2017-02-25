import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'

import styles from './dashboard.scss'

const sponsors0 = ['a16z','yahoo', 'qualtrics', 'viasat', 'united', 'twilio', 'techpoint', 'statefarm', 'quikorder']
const sponsors1 = ['fulcrum', 'microsoft', '3red', 'imo', '1517', 'cloudera', 'a16z']
const sponsors2 = ['onenorth', 'namecheap', 'facebook', 'lawrencelivermore', 'johndeere', 'google', 'huawei', 'github', 'firebase']
const sponsors3 = ['akunacapital', 'amadeus', 'aarp', 'at_t', 'bitovi', 'bmo', 'bp', 'capitalone', 'citadel']

class Dashboard extends Component {
  render = () => (
      <div className={styles['dashboard']}>
      <Clock />
      <Events />
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

@inject('dashboardStore') @observer
class Sponsors extends Component {
	render = () => (
		<div className={styles['sponsors-container']}> 
		{this.props.dashboardStore.currentSponsors == 0 ? sponsors0.map((s) => (<img key={s} className={s == 'fulcrum' ?  styles['fulcrum-sponsor'] : styles['normal-sponsor']} src={'../src/assets/img/svg/sponsors/' + s + '.svg'}/>)) : null}
		{this.props.dashboardStore.currentSponsors == 1 ? sponsors1.map((s) => (<img key={s} className={s == 'fulcrum' ?  styles['fulcrum-sponsor'] : styles['normal-sponsor']} src={'../src/assets/img/svg/sponsors/' + s + '.svg'}/>)) : null}
		{this.props.dashboardStore.currentSponsors == 2 ? sponsors2.map((s) => (<img key={s} className={s == 'fulcrum' ?  styles['fulcrum-sponsor'] : styles['normal-sponsor']} src={'../src/assets/img/svg/sponsors/' + s + '.svg'}/>)) : null}
		{this.props.dashboardStore.currentSponsors == 3 ? sponsors3.map((s) => (<img key={s} className={s == 'fulcrum' ?  styles['fulcrum-sponsor'] : styles['normal-sponsor']} src={'../src/assets/img/svg/sponsors/' + s + '.svg'}/>)) : null}
		</div>
	)

	
}
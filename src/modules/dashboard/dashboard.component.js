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
	      <div className={styles['col1']}>
		      <Clock />
		      <Sponsors/>
	      </div>
	      <div className={styles['col2']}>
	      	<Events />
		      <TwitterTimeline/>
	      </div>
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
			<div className={styles['schedule-header']}> <span className={styles.text}> SCHEDULE </span> </div>
			<div className={styles['sub-event-header']}> <span className={styles.text}> Happening Now </span> </div>
			<div className={styles['sub-event-header']}> <span className={styles.text}> Upcoming </span> </div>
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

class TwitterTimeline extends Component {
	render = () => (
    <div className={styles['event-container']}>
    	<div className={styles['schedule-header']}> <span className={styles.text}> TWITTER FEED </span> </div>
        <div className={styles['feed']}>
        <a className="twitter-timeline" href="https://twitter.com/HackIllinois">Tweets by HackIllinois</a>
     		</div>
        
    </div>
	)
}

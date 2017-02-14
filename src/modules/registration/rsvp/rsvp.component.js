import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import styles from './rsvp.scss'

const ecosystems = {
	0:'create',
	1:'javascript',
	2:'ios',
	3:'android',
	4:'ruby',
	5:'python',
	6:'embedded',
	7:'linux',
	8:'create'
}


@inject('rsvpStore') @observer
class RSVP extends Component {
	logout = () => {
		sessionStorage.removeItem('auth')
		window.location = '/login'
	}
	render = () => (
		this.props.rsvpStore.responseRecorded ? 
		<Thanks /> :
		<div>
			<div className={styles.registrationHeader}>
		     <a href="/"><img className={styles.headerLogo} src="../../src/assets/img/landing-logo.png"/></a>
		     <a onClick={this.logout} className={styles.logout} href="#"> Logout </a>
			</div>
			<div className={styles['instruction-text']}> 
				Let us know you're coming by picking your accepted ecosystem or opting to create. If you can't make it, we'd love to see you next year! 
			</div>
			<div className={styles['accept-container']}>
				<div onClick={this.props.rsvpStore.acceptEcosystem} id={styles[ecosystems[this.props.rsvpStore.acceptedEcosystemId]]} className={[styles['project-card'], this.props.rsvpStore.isAttending && this.props.rsvpStore.type == 'CONTRIBUTE' ? styles['card-active'] : ''].join(' ')}>
					<img draggable="false" src={'../../../src/assets/img/card-' + (this.props.rsvpStore.acceptedEcosystemId > 0 ? this.props.rsvpStore.acceptedEcosystemId-1 : this.props.rsvpStore.acceptedEcosystemId) + '.svg'}/>
					<span className={styles.label}>{ ecosystems[this.props.rsvpStore.acceptedEcosystemId].toUpperCase()} </span>
	    	</div>
	    	<div onClick={this.props.rsvpStore.acceptCreate} id={styles.create} className={[styles['project-card'], this.props.rsvpStore.isAttending && this.props.rsvpStore.type == 'CREATE' ? styles['card-active'] : ''].join(' ')}>
					<img draggable="false" src="../../../src/assets/img/card-7.svg"/>
					<span className={styles.label}>{"create".toUpperCase()}</span>
	    	</div>
	    	<div className={[!this.props.rsvpStore.isAttending  && this.props.rsvpStore.type == 'CREATE'  && this.props.rsvpStore.type == 'CONTRIBUTE' ? styles['nothanks-active'] : '', styles.rect].join(' ') } onClick={this.props.rsvpStore.noThanks}> NO, THANKS! </div>
			</div>
			{ sessionStorage.getItem('hasLightningInterest') == 'true'  ? 
	   		<div className={styles['lightning']}> Still interested in giving a lightning talk? Sign up <a href='https://goo.gl/forms/Q6fXULc76bGJj9Ha2'> here </a> </div>: null }
		</div> 
	)
}

@inject('rsvpStore') @observer
class Thanks extends Component {
	logout = () => {
		sessionStorage.removeItem('auth')
		window.location = '/login'
	}
	
	render = () => (
		<div>
			<div className={styles.registrationHeader}>
		     <a href="/"><img className={styles.headerLogo} src="../../src/assets/img/landing-logo.png"/></a>
		     <a onClick={this.logout} className={styles.logout} href="#"> Logout </a>
			</div>
			<img className={styles.confirmation} draggable="false" src="../../../src/assets/img/confirmation.svg" />
			<div className={styles.thanks}> {this.props.rsvpStore.thanksText} </div>
			<div className={styles['instruction-text']}>
				{this.props.rsvpStore.infoText} If you have any issues or questions, send us an email at <a href="mailto:contact@hackillinois.org">contact@hackillinois.org</a>.
			</div>
		</div>
	)
}

export default RSVP
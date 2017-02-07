import React, {Component} from 'react'
import {observer, Provider, inject} from 'mobx-react'

import styles from './registration.scss'

@inject('store') @observer
class Registration extends Component {
	logout = () => {
		sessionStorage.removeItem('auth')
		window.location = '/login'
	}
	render = () => (
		<div>
			<div className={styles.registrationHeader}>
      	<a href="/">
      	<img className={styles.headerLogo} src="../src/assets/img/landing-logo.png"/>
      	</a>
      	{ this.props.store.loggedIn ? <a onClick={this.logout} className={styles.logout} href="#"> Logout </a> : null }
			</div>
			{this.props.children}
		</div>
	)
}


export default Registration

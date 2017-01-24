import React, {Component} from 'react'
import {observer, Provider, inject} from 'mobx-react'

import styles from './registration.scss'

@inject('store') @observer
class Registration extends Component {

	render = () => (
			<div>
				<div className={styles.registrationHeader}>
        	<img className={styles.headerLogo} src="http://hackillinois.org/src/assets/img/landing-logo.png"/>
    		</div>
				{this.props.children} 
			</div>
	)
}


export default Registration
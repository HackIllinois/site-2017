import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import styles from '../login/login.scss'
import resetStyles from './reset.scss'
import Button from '../components/button'

@inject('resetStore') @observer
class Reset extends Component {

	onChange = (e) => {
		this.props.resetStore.email = e.target.value;
	}
	onChangePass1 = (e) => {
		this.props.resetStore.createPassword = e.target.value
	}
	onChangePass2 = (e) => {
		this.props.resetStore.confirmPassword = e.target.value
	}

	render = () => (
		<div>
			<div className={styles.registrationHeader}>
		     <a href="/"><img className={styles.headerLogo} src="../../src/assets/img/landing-logo.png"/></a>
			</div>
			<div className={styles['instruction-text']}> 
				Create an account to begin your application. Log in to make changes to your application at any time. 
			</div>
			{this.props.resetStore.token == '' ?
			<div className={styles['form-container']}>
				<div className={styles['reg-input']}>
					<input onChange={this.onChange} value={this.props.resetStore.email} placeholder='Email' />
				</div> 
				<Button onClick={this.props.resetStore.submitEmail} label="RESET PASSWORD" />
				{this.props.resetStore.emailSent ? 
				<div className={resetStyles.email}> Check your email for further instructions </div> :
				null }
			</div>
			: 
			<div className={styles['form-container']}>
				<div className={styles['reg-input']}>
					<input onChange={this.onChangePass1} type='password' value={this.props.resetStore.createPassword} placeholder='Create new password' className={styles['top-component']} />
					<input onChange={this.onChangePass2} type='password' value={this.props.resetStore.confirmPassword} placeholder='Confirm new password' />
				</div>
				<Button onClick={this.props.resetStore.resetPassword} label="RESET PASSWORD" />

			</div>
			}
		</div>
	)
}

export default Reset
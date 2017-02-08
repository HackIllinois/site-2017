import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import styles from './login.scss'
import Button from '../components/button'

@inject('loginStore') @observer
class Login extends Component {
	onEmailChange = (e) => {
		this.props.loginStore.email = e.target.value;
	}
	onPasswordChange = (e) => {
		this.props.loginStore.password = e.target.value;
	}
	onSubmit = () => {
		this.props.loginStore.authenticate();
	}
	onKeyUp = (e) => {
		if (e.keyCode == 13) {
			this.props.loginStore.authenticate();
		}
	}

	render = () => (
		<div>
			<div className={styles.registrationHeader}>
		     <a href="/"><img className={styles.headerLogo} src="../../src/assets/img/landing-logo.png"/></a>
			</div>
			<div className={styles['instruction-text']}> 
				Create an account to begin your application. Log in to make changes to your application at any time. 
			</div>
			<div className={styles['form-container']}>
				<div className={styles['reg-input']}>
				<input onChange={this.onEmailChange} value={this.props.loginStore.email} className={styles['top-component']} placeholder='Email' />
				<input onKeyUp={this.onKeyUp} onChange={this.onPasswordChange} value={this.props.loginStore.password} type='password' placeholder='Password' />
				</div> 
				<Button onClick={this.onSubmit} label="LOG IN" />
			</div>
			<div className={[styles.forgotPass, this.props.loginStore.error ? styles.error : ''].join(' ')}> <a href='/reset'> Forgot your password? </a> </div>
			<div className={styles.forgotPass}> <a href='/registration'> Create new account </a> </div>

		</div>
	)
}

//{this.props.loginStore.error ? <div className={styles.error}> Invalid password </div> : <div className={styles.placeholder}> ~ </div>}

export default Login

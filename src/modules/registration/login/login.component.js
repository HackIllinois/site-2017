import React, {Component} from 'react'

import styles from './login.scss'
import Button from '../components/button'

class Login extends Component {
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
				<input className={styles['top-component']} placeholder="email" />
				<input placeholder="password" />
				</div> 
				<Button label="Log in" />
			</div>
		</div>

	)
}

export default Login

import React, {Component} from 'react'
import {inject, observer } from 'mobx-react'

import Input from './Input'

const loggedIn = window.location.href.includes('code')
const code = loggedIn ?  window.location.search.slice(6) : ''

import styles from './userinfo.scss'
import {left_forms, right_forms} from './forms'

@inject('store') @observer
class UserInfo extends Component {

	showStore = () => {
		console.log(this.props.store.userData)
	}

	render = () => {
		return(
			<div>
			<div className={styles['info-text']}> INFO </div>
			<div className={styles.container}>
				<div className={styles['column-left']}>
					{left_forms.map((form) =>(<Input password={form.password} options={form.options || []} key={form.id} id={form.id} />))}
				</div>
				<div className={styles['column-right']}>
					{right_forms.map((form) =>(<Input password={form.password} options={form.options || []} key={form.id} id={form.id} />))}
				</div>
				<div className={styles['small-container']}> 
					<div className={styles['small-text']}> Are you interested in giving a short (&lt;5 min) lightning talk on a topic of your choice? </div> 
					<div className={styles['small-input']}> <Input password={false} options={['YES','NO']} id='hasLightningInterest'/> </div>
				</div>
				<div className={styles['small-container']}> 
					<div className={styles['small-text']}> We'd love to connect you to awesome opportunities at sponsoring companies. Is it okay if we share your information with our sponsors? </div> 
					<div className={styles['small-input']}> <Input password={false} options={['YES','NO']} id='isPrivate'/> </div>
				</div>
			</div>
				
			</div> 
		)	
	}
}

export default UserInfo


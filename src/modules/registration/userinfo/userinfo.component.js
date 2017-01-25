import React, {Component} from 'react'
import {inject, observer } from 'mobx-react'

import Input from '../components/input'
import Button from '../components/button'

const loggedIn = window.location.href.includes('code')
const code = loggedIn ?  window.location.search.slice(6) : ''

import styles from './userinfo.scss'
import {all_form_fields, left_forms, right_forms} from './forms'

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
			<div className={styles['form-field-container']}>
				{all_form_fields.map((form) =>(<Input columns={true} type={form.type || ''} options={form.options || []} key={form.id} id={form.id} />))}
			</div>
				<div className={styles['small-container']}>
					<div className={styles['small-text']}> Are you interested in giving a short (&lt;5 min) lightning talk on a topic of your choice? </div>
					<div className={styles['small-input']}> <Input columns={true} password={false} options={['YES','NO']} id='hasLightningInterest'/> </div>
				</div>
				<div className={styles['small-container']}>
					<div className={styles['small-text']}> We'd love to connect you to awesome opportunities at sponsoring companies. Is it okay if we share your information with our sponsors? </div>
					<div className={styles['small-input']}> <Input columns={true} password={false} options={['YES','NO']} id='isPrivate'/> </div>
				</div>
				<div className={styles['continue-button']}>
		    	<Button dest='/registration/3' arrow='right' label='CONTINUE'/>
		    </div>
			</div>
			</div>
		)
	}
}

export default UserInfo

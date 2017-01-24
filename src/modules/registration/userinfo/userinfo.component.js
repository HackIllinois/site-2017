import React, {Component} from 'react'
import {inject, observer } from 'mobx-react'

import Input from './Input'

const loggedIn = window.location.href.includes('code')
const code = loggedIn ?  window.location.search.slice(6) : ''

import styles from './userinfo.scss'
import {left_forms, right_forms} from './forms'

@inject('store') @observer
class UserInfo extends Component {

	render = () => {
		return(
			<div>
			<div className={styles['info-text']}> INFO </div>
			<div className={styles.container}>
				<div className={styles['column-left']}>
					{left_forms.map((form) =>(<Input password={form.password} dropdown={form.dropdown} key={form.id} id={form.id} />))}
				</div>
				<div className={styles['column-right']}>
					{right_forms.map((form) =>(<Input password={form.password} dropdown={form.dropdown} key={form.id} id={form.id} />))}
				</div>
			</div>
			</div> 
		)	
	}
}

export default UserInfo

/*
<div className={styles.center} >
				{forms.map((form) => (<Input dropdown={form.dropdown} disabled={form.disabled} key={form.id} id={form.id}/>))}
				</div>
				*/

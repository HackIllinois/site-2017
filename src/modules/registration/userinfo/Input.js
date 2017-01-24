import React, {Component} from 'react'
import {inject, observer } from 'mobx-react'

import styles from './input.scss'

@inject('store') @observer
class Input extends Component {
	onChange = (e) => {
		this.props.store.userData[this.props.id] = e.target.value
	}

	render = () => (
		<div className={styles['reg-input']}>
		{ this.props.dropdown ? 
			<select>
				<option value="1"> one </option>
				<option value="2"> two </option>
				<option value="3"> three </option>
				<option value="4"> four </option>
			</select>
			:
			<input type={this.props.password ? 'password' : ''} onChange={this.onChange} value={this.props.store.userData[this.props.id]} />
		}
		<span> {this.props.id.replace('_', ' ')} </span> 
		</div>
	)
}

Input.proptypes	= {
	editable: React.PropTypes.bool,
	id: React.PropTypes.string.isRequired,
	dropdown: React.PropTypes.bool.isRequired,
	options: React.PropTypes.array,
	password: React.PropTypes.bool
}

export default Input

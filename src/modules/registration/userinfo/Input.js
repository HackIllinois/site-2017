import React, {Component} from 'react'
import {inject, observer } from 'mobx-react'

import styles from './input.scss'

@inject('store') @observer
class Input extends Component {
	onChange = (e) => {
		this.props.store.userData[this.props.id] = e.target.value
		console.log(this.props.store.userData)
	}

	render = () => (
		<div className={styles['reg-input']}>
		{ this.props.options.length != 0 ? 
			<select value={this.props.store.userData[this.props.id]} onChange={this.onChange}>
				{this.props.options.map((option, index) => (
				<option key={index} value={option}> {option} </option>
				))}
			</select>
			:
			<input type={this.props.password ? 'password' : ''} onChange={this.onChange} value={this.props.store.userData[this.props.id]} />
		}
		<span> {this.props.id.replace('_', ' ')} </span> 
		</div>
	)
}

Input.proptypes	= {
	id: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	password: React.PropTypes.bool
}

export default Input

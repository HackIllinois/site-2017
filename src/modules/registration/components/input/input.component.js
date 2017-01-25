import React, {Component} from 'react'
import {inject, observer } from 'mobx-react'

import styles from './input.scss'

const map = {
	firstName: 'first name',
  lastName: 'last name',
  shirtSize: 'shirt size',
  diet: 'dietary restrictions',
  age: 'age',
  graduationYear: 'grad year',
  transportation: 'transportation',
  school: 'school',
  major: 'major',
  gender: 'gender',
  professionalInterest: 'professional interests',
  github: 'github username',
  linkedin: 'linkedin username',
  interests: 'interests',
  isNovice: 'are you a novice?',
  isPrivate: ' ',
  hasLightningInterest: ' ',
  phoneNumber: 'phone number',
  email: 'email',
  createPassword: 'create password',
  confirmPassword: 'confirm password',
  resume: 'resume'
}

const formatOption = (str) => (
	str.replace(/_/g, " ").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
)

@inject('store') @observer
class Input extends Component {
	onChange = (e) => {
		const that = this;
		this.props.store.userData[this.props.id] = e.target.value
		console.log(this.refs.fileUpload.files)
		if(this.props.type == 'file'){
			let reader = new FileReader();
			reader.onload = function() {
				//console.log(this.result)
				that.props.store.userData.resume = this.result
			}
			console.log(this.refs.fileUpload.files[0])
			this.props.store.selectedFile = this.refs.fileUpload.files[0].name
  		reader.readAsBinaryString(this.refs.fileUpload.files[0]);
		}
	}

	render = () => (
		<div className={styles['reg-input']}>
		{ this.props.options.length != 0 ? 
			<select value={this.props.store.userData[this.props.id]} onChange={this.onChange}>
				{this.props.options.map((option, index) => (
				<option key={index} value={option}> {formatOption(option)} </option>
				))}
			</select>
			:
			<input id={this.props.type == 'file' ? 'file' : null } accept='.pdf' ref='fileUpload' type={this.props.type} onChange={this.onChange} value={this.props.type == 'file' ? undefined : this.props.store.userData[this.props.id]} />
		}
		{this.props.type == 'file' ? <label className={styles['file-label']} htmlFor='file'> {this.props.store.selectedFile || 'Choose a file...'} </label> : null }
		<span> {map[this.props.id] || this.props.id} </span> 
		</div>
	)
}

Input.proptypes	= {
	id: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	password: React.PropTypes.bool
}

/* {this.props.type == 'file' ? <label htmlFor='file'> Choose a file... </label> : null } */

export default Input

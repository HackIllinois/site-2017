import React, {Component} from 'react'
import {inject, observer } from 'mobx-react'

import styles from './input.scss'

/*
const checkValidYear  = (year) => {
	var reg = new RegExp("^[12][0-9]{3}$");
	return reg.test(year);
}

const checkValidAge = (age) => {
    //Two digits, so anything between and including 0 and 99
    var reg = new RegExp(/^\d{1,2}$/);
    return reg.test(age);
}

const checkAgeandYear = (val) => {
	if(val != 'graduationYear' && val != 'age') return true;
	if(val == 'graduationYear') return checkValidYear(this.props.store.userData[val]);
	if(val == 'age') return checkValidYear(this.props.store.userData[val]);
}
*/

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
  isNovice: 'are you a beginner?',
  isPrivate: ' ',
  hasLightningInterest: ' ',
  phoneNumber: 'phone number',
  email: 'email',
  createPassword: 'create password (8+ chars)',
  confirmPassword: 'confirm password',
  resume: 'resume',
  teamMember: 'add team member',
  repo: 'repo (optional)',
  description: 'describe your idea'
}

const formatOption = (str) => (
	str.replace(/_/g, " ").replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
)

@inject('store') @observer
class Input extends Component {

	checkAgeandYear = (val) => {

		if(this.props.type == 'add-member' || this.props.type == 'member-li') return true;
		if(val == 'createPassword' || val == 'confirmPassword'){
			if(this.props.store.userData[val].length < 8) return false;
		}
		if(this.props.store.userData[val] == '') return false;
		if(val != 'graduationYear' && val != 'age') return true;
		if(val == 'graduationYear') {
			var reg = new RegExp("^[12][0-9]{3}$");
			console.log(reg.test(this.props.store.userData[val]))
    	return reg.test(this.props.store.userData[val]);
		}
		if(val == 'age') {
			var reg = new RegExp(/^\d{1,2}$/);
			console.log(reg.test(this.props.store.userData[val]))
    	return reg.test(this.props.store.userData[val]);
		}
	}
	
	onChange = (e) => {
		const that = this;
		if(this.props.type == 'project') {
			this.props.store.project[this.props.id] = e.target.value;
		}
		
		if(this.props.type == 'file' && this.refs.fileUpload.files[0] != undefined){
			let reader = new FileReader();
			reader.onload = function() {
				//console.log(this.result)
				//console.log(JSON.stringify(this.result))
				that.props.store.userData.resume = this.result
				that.props.store.isFileSelected = true
			}
			this.props.store.selectedFile = this.refs.fileUpload.files[0].name
			this.props.store.fileSize = this.refs.fileUpload.files[0].size
  		reader.readAsArrayBuffer(this.refs.fileUpload.files[0]);
		}
		else {
			this.props.store.userData[this.props.id] = e.target.value
		}
	}

	removeCollaborators = () => {
		this.props.store.collaborators = this.props.store.collaborators.filter((c) => (c != this.props.id));
	}

	addCollaborator = (e) => {
		//PRESSING ENTER
		if(e.keyCode == 13 && this.props.store.collaborators.length <= 8) {
			this.props.store.collaborators.push(this.props.store.userData[this.props.id])
			this.props.store.userData[this.props.id] = '';
		}
	}

	render = () => (
		<div onClick={this.props.type == 'member-li' ? this.removeCollaborators : null} className={[styles['reg-input'], this.props.columns ? styles['user-info'] : ''].join(' ')}>
		{ this.props.options.length != 0 ?
			<select className={this.props.store.userData[this.props.id] == '' || this.props.store.userData[this.props.id] == 'Select a School'? styles.red : ''} value={this.props.store.userData[this.props.id]} onChange={this.onChange}>
				{this.props.options.map((option, index) => (
				<option key={index} value={option}> {formatOption(option)} </option>
				))}
			</select>
			:
			<input className={this.checkAgeandYear(this.props.id) == false ? styles.red : '' && this.props.type != 'add-member' } onKeyUp={this.props.type == 'add-member' ? this.addCollaborator : null } disabled={this.props.type == 'member-li' ? 'disabled' : ''} id={this.props.type == 'file' ? 'file' : null } accept='.pdf' ref='fileUpload' type={this.props.type} onChange={this.onChange} value={this.props.type == 'file' ? undefined : this.props.store.project[this.props.id] || this.props.store.userData[this.props.id] || this.props.store.collaborators.filter((c)=>(c == this.props.id))[0] ||  ''} />
		}
		{this.props.type == 'file' ? <label className={[styles['file-label'], !this.props.store.isFileSelected ? styles.red : ''].join(' ')} htmlFor='file'> {this.props.store.selectedFile || 'Choose a file...'} </label> : null }
		<span> {this.props.type == 'member-li' ? 'team member' : map[this.props.id] || this.props.id} </span>
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

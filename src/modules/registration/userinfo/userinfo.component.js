import React, {Component} from 'react'
import {inject, observer } from 'mobx-react'

import axois from 'axios'

import Input from '../components/input'
import Button from '../components/button'

const loggedIn = window.location.href.includes('code')
const code = loggedIn ?  window.location.search.slice(6) : ''

import styles from './userinfo.scss'
import {all_form_fields, left_forms, right_forms} from './forms'

const checkProperties = (obj) => {
    for (var key in obj) {
    	if(key != 'isNovice' && key != 'isPrivate' && key != 'hasLightningInterest'){
       if (obj[key] == ''){
          return false;
        }
      }
    }
    return true;
}

@inject('store') @observer
class UserInfo extends Component {

	showStore = () => {
		console.log(this.props.store.userData)
	}

	saveAttendee = (e) => {

		e.preventDefault();

		const attendeeData = {
    "firstName": this.props.store.userData.firstName,
    "lastName": this.props.store.userData.lastName,
    "shirtSize": this.props.store.userData.shirtSize,
    "diet": this.props.store.userData.diet,
    "age": this.props.store.userData.age,
    "graduationYear": this.props.store.userData.graduationYear,
    "transportation": this.props.store.userData.transportation,
    "school": this.props.store.userData.school,
    "major": this.props.store.userData.major,
    "gender": this.props.store.userData.gender,
    "professionalInterest": this.props.store.userData.professionalInterest,
    "github": this.props.store.userData.github,
    "linkedin": this.props.store.userData.linkedin,
    "interests": this.props.store.userData.interests,
    "isNovice": this.props.store.userData.isNovice == 'YES',
    "isPrivate": this.props.store.userData.isPrivate == 'YES',
    "hasLightningInterest": this.props.store.userData.hasLightningInterest == 'YES',
    "phoneNumber": this.props.store.userData.phoneNumber
   	};

   	if(localStorage.getItem('authorization') != null && checkProperties(attendeeData)){
			window.location = '/registration/3'
		}
		
		

		if(this.props.store.userData.createPassword != this.props.store.userData.confirmPassword){
			 this.props.store.userData.createPassword = ''
			 this.props.store.userData.confirmPassword = ''
		}

		if(checkProperties(attendeeData)) {
			console.log('property check')
			if(this.props.store.isFileSelected){
				console.log('file check')
				localStorage.setItem('userinfo', JSON.stringify(this.props.store.userData));
				this.props.store.saveAttendee(attendeeData);
			}
		}
		else{
			this.props.store.status = 'TRY AGAIN';
		}
		
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
		    	<Button onClick={this.saveAttendee} dest='#' arrow='right' label={this.props.store.status}/>
		    </div>
			</div>
			</div>
		)
	}
}

export default UserInfo

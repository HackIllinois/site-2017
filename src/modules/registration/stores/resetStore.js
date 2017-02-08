import {observable, observer, action, when} from 'mobx'
import {fromPromise} from 'mobx-utils'
import axios from 'axios'

class ResetStore {
	//member variables
	@observable email = ''
	@observable createPassword = ''
	@observable confirmPassword = ''
	@observable token = ''
	@observable emailSent = false;

	constructor() {
		this.token = window.location.href.includes('token') ?  window.location.search.slice(7) : ''
	}

	resetPassword = () => {
		//reset both fields if not a match
		if(this.createPassword !== this.confirmPassword) {
			this.createPassword = ''
			this.confirmPassword = ''
			return;
		}
		const config = {
      headers: { 'Content-Type': 'application/json' }
    };
    const token = fromPromise(axios.post('https://api.hackillinois.org/v1/auth/reset', {'token': this.token, 'password': this.confirmPassword}, config));
    when(() => token.state !== 'pending',
    		 () => {
    		 	if(token.state === 'rejected') {
    		 		this.createPassword = ''
    		 		this.confirmPassword = ''
    		 	}
    		 	if(token.state !== 'rejected') window.location = '/login'
    		 });
	}

	submitEmail = () => {
		const config = {
      headers: { 'Content-Type': 'application/json' }
    };
		const token = fromPromise(axios.post('https://api.hackillinois.org/v1/user/reset', {'email': this.email }, config));
		when(() => token.state !== 'pending',
				 () => {
				 	if(token.state === 'rejected') {
				 		//rejected action
				 	}
				 	if(token.state !== 'rejected') {
				 		this.emailSent = true;
				 		this.email = ''
				 	}
				 });
	}	
}

export default new ResetStore();
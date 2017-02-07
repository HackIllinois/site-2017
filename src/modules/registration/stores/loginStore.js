import {observable, observer, action, when} from 'mobx'
import {fromPromise} from 'mobx-utils'
import axios from 'axios'

class LoginStore {
	//member variables
	@observable email = ''
	@observable password = ''

	authenticate = () => {
		const config = {
			headers: { 'Content-Type': 'application/json' }
	    };
		const token = fromPromise(axios.post('https://api.hackillinois.org/v1/auth', {'email': this.email, 'password': this.password}, config));
		when(() => token.state !== 'pending',
			() => {
			if (token.state === 'rejected') {
				// set password field to blank if empty
				if (token.value.response.data.error.source == 'password') {
					this.password = ''
				}
			}
			if (token.state !== 'rejected') {
				sessionStorage.setItem('email', this.email)
				sessionStorage.setItem('password', this.password)
				sessionStorage.setItem('auth', token.value.data.data.auth)
				window.location = '/registration/2'
			}
		});
	}	
}

export default new LoginStore();
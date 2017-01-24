import {observable, observer, action, when} from 'mobx'
import {fromPromise} from 'mobx-utils'
import axios from 'axios'
import {browserHistory} from 'react-router'

const loggedIn = window.location.href.includes('code')
const code = loggedIn ?  window.location.search.slice(6) : ''

class RegistrationStore {

	//progress var from 0 to 4
	@observable progress = 0
	@observable auth_token = ''
	@observable isAuthenticated = false
	@observable userData = {
		github_username: '',
		email: '',
		name: '',
		major: '',
		school: '',
		age: '',
		shirt_size: '',
		dietary: '',
		gender: '',
		interests: ''
	}

	constructor(code) {
		
		if(!window.location.pathname.includes('/registration/2')) return

		//redirect
		if(code == '') window.location = 'https://github.com/login/oauth/authorize?client_id=9674b582b52db2bf4197'

		//console.log('not redirecting')
		const token = fromPromise(axios.get('https://hackillinois-auth-helper.herokuapp.com/authenticate/'+code), 'initial')
			
		when(
			() => token.state !== 'pending',
			() => {
				if(token.state !== 'rejected') {
	    		this.auth_token = token.value.data.token
	    		const userInfo = fromPromise(
	    			axios.get('https://api.github.com/user', {
    					headers: {'Authorization': 'token ' + this.auth_token}
    				}))

    			when(
    				() => userInfo.state !== 'pending',
    				() => {
    					if(userInfo.state == 'rejected') window.location = 'https://github.com/login/oauth/authorize?client_id=9674b582b52db2bf4197'
  						this.isAuthenticated = true
    					this.userData.github_username = userInfo.value.data.login
    					this.userData.email = userInfo.value.data.email
    					this.userData.name = userInfo.value.data.name
    				}
    			)
    		}
  		}
		)
	}
}

export default new RegistrationStore(code);
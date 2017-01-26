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
		firstName: '',
        lastName: '',
        shirtSize: 'S',
        diet: '',
        age: '',
        graduationYear: '',
        transportation: 'NOT_NEEDED',
        school: '',
        major: '',
        gender: 'MALE',
        professionalInterest: 'NONE',
        github: '',
        linkedin: '',
        interests: '',
        isNovice: 'NO',
        isPrivate: 'NO',
        hasLightningInterest: 'NO',
        phoneNumber: '',
        email: '',
        createPassword: '',
        confirmPassword: '',
        resume: '',
        teamMember: ''
	}
    @observable ecosystems = {
        javascript: false,
        ios:false,
        android:false,
        ruby:false,
        python:false,
        embedded:false,
        linux:false,
        create: false
    }
    @observable project = {
        name: '',
        description: '',
        repo: ''
    }
    @observable selectedEcosystems = 0;
    @observable selectedFile = '';
    @observable fileSize = 0;
    @observable collaborators = [];
	@observable codeOfConductCheck = false;

	constructor(code) {
		/*
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
    					this.userData.github = userInfo.value.data.login
    					this.userData.email = userInfo.value.data.email
    					//this.userData.name = userInfo.value.data.name
    				}
    			)
    		}
  		}
		)
        */
	}
}

export default new RegistrationStore(code);

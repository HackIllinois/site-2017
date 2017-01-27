import {observable, observer, action, when} from 'mobx'
import {fromPromise} from 'mobx-utils'
import axios from 'axios'
import {browserHistory} from 'react-router'

const loggedIn = window.location.href.includes('code')
const code = loggedIn ?  window.location.search.slice(6) : ''

const ab2str = (buf) => {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}

const str2ab = (str) => {
  var buf = new ArrayBuffer(str.length*1); // 2 bytes for each char
  var bufView = new Uint8Array(buf);
  for (var i=0, strLen=str.length; i<strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

class RegistrationStore {

    constructor() {
        if(localStorage.getItem('userinfo') != null) {
            this.userData = JSON.parse(localStorage.getItem('userinfo'));
        }
    }

    registerAttendee = () => {

        console.log(JSON.parse(localStorage.getItem('attendee')))

        const req = {
            "attendee": JSON.parse(localStorage.getItem('attendee')),
            "ecosystemInterests": JSON.parse(localStorage.getItem('ecosystemInterests')),
            "projects": JSON.parse(localStorage.getItem('projects')),
            "collaborators": this.collaborators.map((c)=>({"collaborator":c}))
        }

        const config = {
            headers: {
                'Authorization': localStorage.getItem('authorization'),
                'Content-Type': 'application/json'
            }
        };

        const submitToken = fromPromise(axios.post('https://api.hackillinois.org/v1/registration/attendee', req, config))
                    
        when(() => submitToken.state !== 'pending',
             () => {                            
                        const config = {
                            headers: {
                                'Authorization': localStorage.getItem('authorization'),
                                'Content-Type': 'application/pdf',
                            }
                        };
                        const resumeToken = fromPromise(axios.post('https://api.hackillinois.org/v1/upload/resume', str2ab(localStorage.getItem('resume')), config));
                    
                        when(() => resumeToken.state !== 'pending',
                             () => { 
                                    if(resumeToken.state !== 'rejected') window.location = '/registration/5'
                            });
                            
                        }); 
    }
    saveAttendee = (attendeeData) => {

        localStorage.setItem('attendee', JSON.stringify(attendeeData))

        const authToken = fromPromise(axios.post('https://api.hackillinois.org/v1/auth', {'email': 'systems@hackillinois.org', 'password': 'W5FHacHWmMwXcyxAajT'}));
        when(() => authToken.state !== 'pending',() => {
            if(authToken.state !== 'rejected') {

            this.adminAuth = authToken.value.data.data.auth
            
            const config = {
                headers: {
                    'Authorization': this.adminAuth,
                    'Content-Type': 'application/json'
                }
            };

            //Create new User
            const userToken = fromPromise(axios.post('https://api.hackillinois.org/v1/user', {'email': this.userData.email, 'password': this.userData.createPassword }, config));
        
            when(() => userToken.state !== 'pending',() => {
                if(userToken.state !== 'rejected') {
                    
                    this.userAuth = userToken.value.data.data.auth
                    
                    localStorage.setItem('authorization', this.userAuth)
                    console.log(ab2str(this.userData.resume))
                    localStorage.setItem('resume', ab2str(this.userData.resume))

                    window.location = '/registration/3'
                }});
    }

    @observable adminAuth = ''
    @observable userAuth = ''
	@observable status = 'CONTINUE'
	@observable userData = {
		firstName: '',
        lastName: '',
        shirtSize: 'S',
        diet: 'NONE',
        age: '',
        graduationYear: '',
        transportation: 'NOT_NEEDED',
        school: '',
        major: '',
        gender: 'FEMALE',
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
    @observable isFileSelected = false;
    @observable fileSize = 0;
    @observable collaborators = [];
	@observable codeOfConductCheck = false;

	
}

export default new RegistrationStore(code);



/*
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
        
    }*/



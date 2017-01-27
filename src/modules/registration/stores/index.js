import {observable, observer, action, when} from 'mobx'
import {fromPromise} from 'mobx-utils'
import axios from 'axios'
import {browserHistory} from 'react-router'

const loggedIn = window.location.href.includes('code')
const code = loggedIn ?  window.location.search.slice(6) : ''

function arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}

function base64ToArrayBuffer(base64) {
    var binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
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
                const resumeToken = fromPromise(axios.post('https://api.hackillinois.org/v1/upload/resume', base64ToArrayBuffer(localStorage.getItem('resume')), config));
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
                localStorage.setItem('resume', arrayBufferToBase64(this.userData.resume))
                // window.file = this.userData.resume
                window.location = '/registration/3'
                }});
            }});
    }
    /*
    saveAttendee = (attendeeData) => {
        localStorage.setItem('attendee', JSON.stringify(attendeeData))
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        //Create new User
        const userToken = fromPromise(axios.post('https://api.hackillinois.org/v1/user', {'email': this.userData.email, 'password': this.userData.createPassword }, config));
    
        when(() => userToken.state !== 'pending',() => {
            if(userToken.state !== 'rejected') {
                this.userAuth = userToken.value.data.data.auth
                localStorage.setItem('authorization', this.userAuth)
                window.hackillinois["upload"] = this.userData.resume
                window.location = '/registration/3'
            }
            else {
                console.log("issue");
            }
        });
    }
    */

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

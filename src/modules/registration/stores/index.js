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
        if(sessionStorage.getItem('userinfo') != null) {
            this.userData = JSON.parse(sessionStorage.getItem('userinfo'));
        }
        if(sessionStorage.getItem('authorization') != null) {
            this.previouslyRegistered = true;
        }
    }

    registerAttendee = () => {

        const req = {
            "attendee": JSON.parse(sessionStorage.getItem('attendee')),
            "ecosystemInterests": JSON.parse(sessionStorage.getItem('ecosystemInterests')),
            "projects": JSON.parse(sessionStorage.getItem('projects')),
            "collaborators": this.collaborators.map((c)=>({"collaborator":c}))
        }

        const config = {
            headers: {
                'Authorization': sessionStorage.getItem('authorization'),
                'Content-Type': 'application/json'
            }
        };

        const submitToken = fromPromise(axios.post('https://api.hackillinois.org/v1/registration/attendee', req, config))

        when(() => submitToken.state !== 'pending',
             () => {
                const config = {
                    headers: {
                        'Authorization': sessionStorage.getItem('authorization'),
                        'Content-Type': 'application/pdf',
                    }
                };
                const resumeToken = fromPromise(axios.post('https://api.hackillinois.org/v1/upload/resume', base64ToArrayBuffer(sessionStorage.getItem('resume')), config));
                when(() => resumeToken.state !== 'pending',
                     () => {
                            if(resumeToken.state !== 'rejected')  {
                                window.location = '/registration/5'
                            }
                            else {
                                if (ga) {
                                    ga('send', 'exception', {
                                        'exDescription': submitToken.value, 
                                        'exFatal': true
                                    })
                                }
                            }
                });
        });
    }
   saveAttendee = (attendeeData) => {

    sessionStorage.setItem('attendee', JSON.stringify(attendeeData))
    sessionStorage.setItem('resume', arrayBufferToBase64(this.userData.resume))

    if(this.previouslyRegistered) {
        window.location = '/registration/3'
    }

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //Create new User
    const userToken = fromPromise(axios.post('https://api.hackillinois.org/v1/user', {'email': this.userData.email, 'password': this.userData.createPassword }, config));
    when(() => userToken.state !== 'pending',() => {
        if(userToken.state == 'rejected') {
            console.log('rejected')
            console.log(userToken)
            if (ga) {
                ga('send', 'exception', {
                    'exDescription': userToken.value,
                    'exFatal':true
                })
            }
        }
        if(userToken.state !== 'rejected') {
            this.userAuth = userToken.value.data.data.auth
            console.log(userToken);
            sessionStorage.setItem('authorization', this.userAuth)
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
        isPrivate: 'YES',
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
    @observable previouslyRegistered = false;
    @observable selectedEcosystems = 0;
    @observable isFileSelected = false;
    @observable collaborators = [];
	@observable codeOfConductCheck = false;
}

export default new RegistrationStore(code);

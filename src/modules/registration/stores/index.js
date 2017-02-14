import {observable, observer, action, when} from 'mobx'
import {fromPromise} from 'mobx-utils'
import axios from 'axios'
import {browserHistory} from 'react-router'

const loggedIn = window.location.href.includes('code')
const code = loggedIn ?  window.location.search.slice(6) : '';

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-46010489-2', {
    'cookieDomain': 'hackillinois.org'
});

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
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

class RegistrationStore {
    constructor() {
        if(sessionStorage.getItem('rsvp')) {
            this.confirmRSVP = true;
            //this.status = 'CONFIRM'
        } 
        //console.log('RegistrationStore')
        if (sessionStorage.getItem('auth') != null) {
            //set flag
            this.loggedIn = true;
            //if the user has an auth token, prepopulate data
            const config = {
              headers: {
                'Authorization': sessionStorage.getItem('auth'),
                'Content-Type': 'application/json'
              }
            };
            const token = fromPromise(axios.get('https://api.hackillinois.org/v1/registration/attendee', config))
            /*
            const rsvpToken = fromPromise(axios.get('https://api.hackillinois.org/v1/rsvp', config))

            when(() => rsvpToken.state !== 'pending', 
                 () => {
                    console.log('return')
                 });*/

            when(() => token.state !== 'pending',
                 () => { 
                    if(token.state == 'rejected') {
                        this.userData.email = sessionStorage.getItem('email')
                        this.userData.createPassword = sessionStorage.getItem('password')
                        this.userData.confirmPassword = sessionStorage.getItem('password')
                    }
                    if(token.state !== 'rejected') {
                      console.log(token.value.data.data.rsvp)
                      if(token.value.data.data.status == 'ACCEPTED') {
                        if(token.value.data.data.hasLightningInterest) sessionStorage.setItem('hasLightningInterest','true');
                        if(window.location.pathname != '/rsvp') window.location = '/rsvp'
                      }

                      if(token.value.data.data.resume) {
                        this.resumeOnFile = true;
                        this.isFileSelected = true;
                      }    
                      this.collaborators = token.value.data.data.collaborators.map((c)=>(c.collaborator))
                      //console.log(token.value.data.data.collaborators)
                      this.populateEcosystems(token.value.data.data)
                      if(sessionStorage.getItem('projects')){
                          let data = {}
                          data.ecosystemInterests = JSON.parse(sessionStorage.getItem('ecosystemInterests'))
                          data.projects = JSON.parse(sessionStorage.getItem('projects'))
                          this.populateEcosystems(data)
                      }
                      for (var key in this.userData) {
                        //copy all the fields
                        if(key == 'email') this.userData[key] = sessionStorage.getItem('email')
                        else if(key == 'createPassword' || key == 'confirmPassword') this.userData[key] = sessionStorage.getItem('password')
                        else if(key == 'isNovice' || key == 'isPrivate' || key == 'hasLightningInterest') token.value.data[key] ? 'YES' : 'NO'
                        else this.userData[key] = token.value.data.data[key];
                      }
                      //get local data first
                      if (sessionStorage.getItem('userinfo') != null) {
                        this.userData = JSON.parse(sessionStorage.getItem('userinfo'));
                      }
                    }
                 })
        }
        if (sessionStorage.getItem('auth') == null && window.location.pathname != '/login' && window.location.pathname != '/' && window.location.pathname != '/projects') {
            window.location = '/login'
        }
        if (sessionStorage.getItem('authorization') != null) {
            this.previouslyRegistered = true;
        }
    }

    populateEcosystems = (data) => {

        //reset all data
        this.ecosystems.javascript = false;
        this.ecosystems.ios = false;
        this.ecosystems.android = false;
        this.ecosystems.ruby = false;
        this.ecosystems.python = false;
        this.ecosystems.embedded = false;
        this.ecosystems.linux = false;

        //Ecosystems
        for (let e of data.ecosystemInterests) {
            if(e.ecosystemId == 1) this.ecosystems.javascript = true;
            if(e.ecosystemId == 2) this.ecosystems.ios = true;
            if(e.ecosystemId == 3) this.ecosystems.android = true;
            if(e.ecosystemId == 4) this.ecosystems.ruby = true;
            if(e.ecosystemId == 5) this.ecosystems.python = true;
            if(e.ecosystemId == 6) this.ecosystems.embedded = true;
            if(e.ecosystemId == 7) this.ecosystems.linux = true;
        }
        this.selectedEcosystems = data.ecosystemInterests.length

        //Projects
        if(data.projects.length > 0) {
            //book-keeping
            this.ecosystems.create = true;
            this.selectedEcosystems++;

            //iterate
            for(let p of data.projects) {
                this.project.name = p.name
                this.project.description = p.description
                this.project.repo = p.repo
            }
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
                'Content-Type': 'application/json'
            }
        };
        if (sessionStorage.getItem('auth') != null) {
            const config = {
              headers: {
                'Authorization': sessionStorage.getItem('auth'),
                'Content-Type': 'application/json'
              }
            };
            const testToken = fromPromise(axios.get('https://api.hackillinois.org/v1/registration/attendee', config))
            when(() => testToken.state !== 'pending',
                 () => { 
                    if (testToken.state == 'rejected') {
                        // they don't have an attendee, do a post
                        const submitToken = fromPromise(axios.post('https://api.hackillinois.org/v1/registration/attendee', req, config))
                        when(() => submitToken.state !== 'pending',
                             () => {
                                const config = {
                                    headers: {
                                        'Authorization': sessionStorage.getItem('auth'),
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
                                                        'exDescription': '/attendee : ' + sessionStorage.getItem('email')  + JSON.stringify(submitToken.value.response.data.error), 
                                                        'exFatal': true
                                                    })
                                                }
                                                
                                            }
                                });
                        });
                    }
                    if (testToken.state !== 'rejected') {
                        // they have an attendee, do a put
                        const submitToken = fromPromise(axios.put('https://api.hackillinois.org/v1/registration/attendee', req, config))
                        when(() => submitToken.state !== 'pending',
                             () => {
                                const config = {
                                    headers: {
                                        'Authorization': sessionStorage.getItem('auth'),
                                        'Content-Type': 'application/pdf',
                                    }
                                };
                                const resumeToken = fromPromise(axios.put('https://api.hackillinois.org/v1/upload/resume', base64ToArrayBuffer(sessionStorage.getItem('resume')), config));
                                when(() => resumeToken.state !== 'pending',
                                     () => {
                                            if(resumeToken.state !== 'rejected')  {
                                                window.location = '/registration/5'
                                            }
                                            else {
                                                if (ga) {
                                                    ga('send', 'exception', {
                                                        'exDescription': '/attendee : ' + sessionStorage.getItem('email')  + JSON.stringify(submitToken.value.response.data.error), 
                                                        'exFatal': true
                                                    })
                                                }
                                            }
                                });
                        });
                    }
                }
            )
        }
        else {
            const userToken = fromPromise(axios.post('https://api.hackillinois.org/v1/user', {'email': sessionStorage.getItem('email'), 'password': sessionStorage.getItem('password') }, config));
            when(() => userToken.state !== 'pending',() => {
                if(userToken.state == 'rejected') {
                    const authToken = fromPromise(axios.post('https://api.hackillinois.org/v1/auth', {'email': sessionStorage.getItem('email'), 'password': sessionStorage.getItem('password') }, config));
                    when(() => authToken.state !== 'pending', () => {
                        if (authToken.state == 'rejected') {
                            if (ga) {
                                ga('send', 'exception', {
                                    'exDescription': '/auth : ' + sessionStorage.getItem('email') + JSON.stringify(authToken.value.response.data.error),
                                    'exFatal':true
                                })
                            }
                        }
                        else {
                            this.userAuth = authToken.value.data.data.auth;
                            sessionStorage.setItem('authorization', this.userAuth)
                            const config = {
                                headers: {
                                    'Authorization': sessionStorage.getItem('authorization'),
                                    'Content-Type': 'application/json'
                                }
                            };
                            const attendeeToken = fromPromise(axios.get('https://api.hackillinois.org/v1/registration/attendee', config))
                            when(() => attendeeToken.state !== 'pending', 
                                () => {
                                    if (attendeeToken.state !== 'rejected') {
                                        // they have an attendee, do a put
                                        const submitToken = fromPromise(axios.put('https://api.hackillinois.org/v1/registration/attendee', req, config))
                                        when(() => submitToken.state !== 'pending',
                                             () => {
                                                const config = {
                                                    headers: {
                                                        'Authorization': sessionStorage.getItem('authorization'),
                                                        'Content-Type': 'application/pdf',
                                                    }
                                                };
                                                const resumeToken = fromPromise(axios.put('https://api.hackillinois.org/v1/upload/resume', base64ToArrayBuffer(sessionStorage.getItem('resume')), config));
                                                when(() => resumeToken.state !== 'pending',
                                                     () => {
                                                            if (resumeToken.state !== 'rejected')  {
                                                                window.location = '/registration/5'
                                                            }
                                                            else {
                                                                if (ga) {
                                                                    ga('send', 'exception', {
                                                                        'exDescription': '/attendee : ' + sessionStorage.getItem('email')  + JSON.stringify(submitToken.value.response.data.error), 
                                                                        'exFatal': true
                                                                    })
                                                                }
                                                            }
                                                });
                                        });
                                    }
                                    else {
                                        // they don't have an attendee, do a post
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
                                                                        'exDescription': '/attendee : ' + sessionStorage.getItem('email')  + JSON.stringify(submitToken.value.response.data.error), 
                                                                        'exFatal': true
                                                                    })
                                                                }
                                                            }
                                                });
                                        });
                                    }
                            });
                        }
                    });
                }
                else {
                    this.userAuth = userToken.value.data.data.auth
                    sessionStorage.setItem('authorization', this.userAuth)
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
                                                    'exDescription': '/attendee : ' + sessionStorage.getItem('email')  + JSON.stringify(submitToken.value.response.data.error), 
                                                    'exFatal': true
                                                })
                                            }
                                        }
                            });
                    });
                }
            });
        }
    }
    saveAttendee = (attendeeData) => {
        sessionStorage.setItem('attendee', JSON.stringify(attendeeData))
        sessionStorage.setItem('resume', arrayBufferToBase64(this.userData.resume))
        sessionStorage.setItem('email', this.userData.email)
        sessionStorage.setItem('password', this.userData.createPassword)

        window.location = '/registration/3'
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
        gender: 'OTHER',
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
  @observable loggedIn = false;
  @observable resumeOnFile = true;
  @observable teamMember = '';

}

export default new RegistrationStore();

import {observable, observer, action, when} from 'mobx'
import {fromPromise} from 'mobx-utils'
import axios from 'axios'

class RSVPStore {

	@observable acceptedEcosystemId = 0 
	@observable authorization
	@observable hasLightningInterest
  @observable responseRecorded = false
  @observable thanksText = ''
  @observable infoText = ''
  @observable isAttending
  @observable type
  @observable RVSPd

	acceptCreate = () => {
		
    const req = {
    	"isAttending": true, 
    	"type": "CREATE"
    }
    
    const config = {
      headers: {
        'Authorization': this.authorization,
        'Content-Type': 'application/json'
      }
    };

    let token
    
    if(this.RVSPd) token = fromPromise(axios.put('https://api.hackillinois.org/v1/rsvp/attendee', req, config))
    else token = fromPromise(axios.post('https://api.hackillinois.org/v1/rsvp/attendee', req, config))

    when(() => token.state !== 'pending',
         () => {
          if(token.state == 'rejected') {
            //console.log('error')
          }
          if(token.state != 'rejected') {
            sessionStorage.setItem('rsvp', 'true')
            this.responseRecorded = true;
            this.thanksText = "You're all set!"
            this.infoText = ''
            sessionStorage.removeItem('auth')
          }
         })  
    
	}

	acceptEcosystem = () => {
		
    if(this.acceptedEcosystemId == 0) return;

    const req = {
    	"isAttending": true, 
    	"type": "CONTRIBUTE"
    }    

    const config = {
      headers: {
        'Authorization': this.authorization,
        'Content-Type': 'application/json'
      }
    };

    let token
    
    if(this.RVSPd) token = fromPromise(axios.put('https://api.hackillinois.org/v1/rsvp/attendee', req, config))
    else token = fromPromise(axios.post('https://api.hackillinois.org/v1/rsvp/attendee', req, config))

    when(() => token.state !== 'pending',
         () => {
          if(token.state == 'rejected') {
            //console.log('error')
          }
          if(token.state != 'rejected') {
            sessionStorage.setItem('rsvp', 'true')
            this.responseRecorded = true;
            this.thanksText = "You're all set!"
            this.infoText = ''
            sessionStorage.removeItem('auth')
          }
         })

	}

	noThanks = () => {

    //console.log('nothanks')
		
    const req = {
    	"isAttending": false, 
    	"type": ""
    }

    const config = {
      headers: {
        'Authorization': this.authorization,
        'Content-Type': 'application/json'
      }
    };


    let token
    
    if(this.RVSPd) token = fromPromise(axios.put('https://api.hackillinois.org/v1/rsvp/attendee', req, config))
    else token = fromPromise(axios.post('https://api.hackillinois.org/v1/rsvp/attendee', req, config))
    
    when(() => token.state !== 'pending',
         () => {
          if(token.state == 'rejected') {
            //console.log('error') 
          }
          if(token.state != 'rejected') {
            sessionStorage.setItem('rsvp', 'true')
            this.responseRecorded = true;
            this.thanksText = "Thanks for applying!"
            this.infoText = "We'd love to see you next year."
            sessionStorage.removeItem('auth')
          }
         })
            
	}

	constructor() {
	  //console.log('rsvpStore')
    if(sessionStorage.getItem('auth') && window.location.pathname == '/rsvp') { 
      //console.log('rsvpStore')
  		this.authorization = sessionStorage.getItem('auth')

  		const config = {
        headers: {
          'Authorization': this.authorization,
          'Content-Type': 'application/json'
        }
      };
      
      const token = fromPromise(axios.get('https://api.hackillinois.org/v1/registration/attendee', config))
      const rsvpToken = fromPromise(axios.get('https://api.hackillinois.org/v1/rsvp/attendee', config))

      when(() => rsvpToken.state !== 'pending',
           () => {
            if(rsvpToken.state == 'rejected') { 
              //this.responseRecorded = false;
            }
            if(rsvpToken.state != 'rejected') {
              //console.log(rsvpToken.value.data.ata)
              if(rsvpToken.value.data.data == {}) {
                //this.responseRecorded = false;
              }
              if(rsvpToken.value.data.data.isAttending) {
                this.thanksText = "You're all set!"
                this.infoText = ''
                //this.responseRecorded = true;
                //sessionStorage.removeItem('auth')
                this.isAttending = rsvpToken.value.data.data.isAttending
                this.type = rsvpToken.value.data.data.type
                this.RVSPd = true;
              }
              else {
                this.thanksText = "Thanks for applying!"
                this.infoText = "We'd love to see you next year."
                //this.responseRecorded = true;
                //sessionStorage.removeItem('auth')
                //console.log(rsvpToken.value.data.data.isAttending)
                this.isAttending = rsvpToken.value.data.data.isAttending
                this.type = rsvpToken.value.data.data.type
                this.RVSPd = true;
              }
            }
          })
      
      when(() => token.state !== 'pending',
           () => { 
             	if(token.state == 'rejected') {
    
              }
              if(token.state !== 'rejected') {
              	//save important information information
              	this.hasLightningInterest = token.value.data.data.hasLightningInterest 
              	this.acceptedEcosystemId = token.value.data.data.acceptedEcosystemId || 0
                if(token.value.data.data.acceptanceType == "CREATE") this.acceptedEcosystemId = 0;

              	//console.log(this.acceptedEcosystemId)
              }
           })
    }

    //testing
    //this.acceptedEcosystemId = 1

	}
}

export default new RSVPStore();
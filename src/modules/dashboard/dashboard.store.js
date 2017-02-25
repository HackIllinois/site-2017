import {observable, observer, action, when} from 'mobx'
import {fromPromise} from 'mobx-utils'
import axios from 'axios'

class DashboardStore {
	@observable date =  new Date();
	@observable currentSponsors = 0;
	@observable happening_m;
	@observable happening_h;
	@observable upcoming_m;
	@observable upcoming_h;

	round(date) {

	}


	constructor() {
		this.date = new Date();
		this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    this.sponsorID = setInterval(
      () => this.cycle(),
      10000
    );
	}

	tick() {
		this.date = new Date();

		let minutes = this.date.getMinutes();
		let hours = this.date.getHours();

		let d1 = Math.floor(minutes/10);
		let d2 = minutes%10;

		if(d2 > 0) d2=0;
		if(d1 > 0 && d1 < 2) d1=0;
		if(d1 >= 3) d1= 3;



		this.happening_m = 10*d1+d2;
		this.happening_h = hours;

		//console.log(this.happening_m)
		console.log(this.date.getHours())


	}

	cycle() {
		this.currentSponsors = (this.currentSponsors+1)%4;
	}


}

export default new DashboardStore();
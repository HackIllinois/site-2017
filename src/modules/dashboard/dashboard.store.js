import {observable, observer, action, when} from 'mobx'
import {fromPromise} from 'mobx-utils'
import axios from 'axios'

class DashboardStore {
	@observable date =  new Date();
	@observable currentSponsors = 0;

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
	}

	cycle() {
		this.currentSponsors = (this.currentSponsors+1)%4;
	}


}

export default new DashboardStore();
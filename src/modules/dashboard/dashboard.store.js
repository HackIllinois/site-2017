import {observable, observer, action, when} from 'mobx'
import {fromPromise} from 'mobx-utils'
import axios from 'axios'

class DashboardStore {
	@observable date =  new Date();

	constructor() {
		this.date = new Date();
		this.timerID = setInterval(
      () => this.tick(),
      1000
    );
	}

	tick() {
		this.date = new Date();
	}


}

export default new DashboardStore();
import React, {Component} from 'react'

import styles from './success.scss'

class Success extends Component {

	componentDidMount = () => {
		history.pushState(null, null, location.href);
  		window.onpopstate = function(event) {
    	history.go(1);
  	};
	}
	render = () => (
		<div>
			<img className={styles.confirmation} draggable="false" src="../../../src/assets/img/confirmation.svg" />
			<div className={styles.thanks}>Thanks for registering! </div>
			<div className={styles['instruction-text']}>
				Keep an eye out for an email regarding more information as we get closer to the event.
				If you have any issues or questions, send us an email at <a href="mailto:contact@hackillinois.org">contact@hackillinois.org</a>.
			</div>
		</div>
	)
}

export default Success

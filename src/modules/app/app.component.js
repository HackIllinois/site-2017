import React, {Component} from 'react' 

import styles from './app.scss'

class App extends Component {
	render = () => (
		<div>
			{this.props.children}
		</div>
	)
}

export default App

	

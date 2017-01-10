import React, {Component} from 'react' 
import styles from './app.scss'


//mobx logging 
//import DevTools, {setLogEnabled} from 'mobx-react-devtools'
//setLogEnabled(true);

const App = (props) => (
		<div> 
			{props.children}
		</div>
)

export default App

	

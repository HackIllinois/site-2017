import React, {Component} from 'react'
import {observer, Provider, inject} from 'mobx-react'

@inject('store') @observer
class Registration extends Component {

	//store = new RegistrationStore(code)
	 
	render = () => (
			<div>
				<div> {this.props.store.progress} </div>
				{this.props.children} 
				<div> next </div>
			</div>
	)
}


export default Registration
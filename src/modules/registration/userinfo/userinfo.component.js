import React, {Component} from 'react'
import {inject, observer } from 'mobx-react'

const loggedIn = window.location.href.includes('code')
const code = loggedIn ?  window.location.search.slice(6) : ''

@inject('store') @observer
class UserInfo extends Component {

	render = () => {
		return(this.props.store.isAuthenticated ?
			<div> 
				<div> {this.props.store.userData.github_username} </div>
				<div> {this.props.store.userData.email} </div>
				<div> {this.props.store.userData.name} </div>
			</div>
			:
			<div> Loading... </div>
		)
	}
	
}

export default UserInfo

//window.location = 'https://github.com/login/oauth/authorize?client_id=9674b582b52db2bf4197'
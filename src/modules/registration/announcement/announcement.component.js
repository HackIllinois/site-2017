import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'

@inject('store') @observer
class Announcement extends Component {
	render = () => (
		<a href="/registration/2"> Github Signin </a>
	)
}

export default Announcement
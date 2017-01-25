import React, { Component } from 'react'
import {inject, observer} from 'mobx-react'

import styles from './announcement.scss'
import Button from '../components/button'

@inject('store') @observer
class Announcement extends Component {
	render = () => (
		<div>
            <div className={styles['welcome-text']}> Welcome to Hackillinois 2017</div>
            <div className={styles['announcement-text']}> 
            This February, Hackillinois is focusing entirely on introducing developers to the Free and Open Source Community. Attendees will be able to choose between two tracks: <strong> Contribute </strong> or <strong> Create </strong>. <br/><br/>
            In the <strong> Contribute </strong> track, attendees will be mentored while working on popular Open Source projects, providing a welcoming environment to make their first additions to the community. In the <strong> Create </strong> track, attendees will venture into the process of creating a brand new Open Source project and community, whether it is a fork, simply script, or new web framework. <br/><br/>
            In making this shift, we've rebuilt our event format from the ground up to focus on collaboration and sustainability rather than competition. And as always, attendance is free, free as in gratis. 
            </div>
            <Button label='REGISTER' dest='/registration/2' arrow='none' />
        </div>
	)
}

export default Announcement


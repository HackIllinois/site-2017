import React,{Component} from 'react'
import {inject, observer} from 'mobx-react'

import styles from './team.scss'
import Input from '../components/input'
import Button from '../components/button'

@inject('store') @observer
class Team extends Component {
	render = () => (
		<div className={styles.container}>
			<div className={styles['title-text']}> TEAM </div>
			<div className={styles['instruction-text']}> Interested in working with a team? Let us know who you prefer to work with via their GitHub username. We don't have team size limits; however, we may not be able to accommodate your whole team. </div>
			<div className={styles['team-select-container']}>
				{this.props.store.collaborators.map((member)=>(
					<Input value={member} id='team member' options={[]} />
				))}
				<Input id='add team member' options={[]}/>
			</div>
			<div className={styles['navigation-container']}>
			    <div className={styles['back-button']}>
			    	<Button dest='/registration/3' arrow='left' label='BACK'/>
			    </div>
			    <div className={styles['continue-button']}>
			    	<Button dest='/registration/5' label='FINISH'/>
			    </div>
			</div>
		</div>
	)
}

export default Team

/*
{this.props.store.teammates.map((member)=>(
				<Input id='team member' options={[]} />
			))}
			*/

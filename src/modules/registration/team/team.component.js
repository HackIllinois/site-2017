import React,{Component} from 'react'
import {inject, observer} from 'mobx-react'

import styles from './team.scss'
import Input from '../components/input'
import Button from '../components/button'

@inject('store') @observer
class Team extends Component {

	submitRegistration = () => {
			this.props.store.registerAttendee();
	}

	toggleCheck = () => {
		this.props.store.codeOfConductCheck = !this.props.store.codeOfConductCheck
	}

	render = () => (
		<div className={styles.container}>
			<div className={styles['title-text']}> TEAM </div>
			<div className={styles['instruction-text']}> Interested in working with a team? Let us know who you prefer to work with via their GitHub username. We don't have team size limits; however, we may not be able to accommodate your whole team. </div>
			<div className={styles['team-select-container']}>
				{this.props.store.collaborators.map((member, index)=>(
					<Input key={index} type='member-li' id={member} options={[]} />
				))}
				<Input type='add-member' id='teamMember' options={[]}/>
				<ul className={styles['checkbox-list']}>
				    <li>
				        <input onChange={this.toggleCheck} className={styles.checkbox} type='checkbox' value={this.props.store.codeOfConductCheck}/>
				        <label className={styles.label}>I agree to <a href="/code">the code of conduct </a></label>
				    </li>
				</ul>
			</div>
			<div className={styles['navigation-container']}>
			    <div className={styles['back-button']}>
			    	<Button dest='/registration/3' arrow='left' label='BACK'/>
			    </div>
			    <div className={styles['continue-button']}>
			    	<Button onClick={this.submitRegistration} dest='#' arrow='right' label='SUBMIT'/>
			    </div>
			</div>
		</div>
	)
}

export default Team



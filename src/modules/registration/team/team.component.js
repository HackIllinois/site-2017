import React from 'react'

import styles from './team.scss'
import Input from '../components/input'

const Team = () => (
	<div className={styles.container}> 
		<div className={styles['title-text']}> TEAM </div> 
		<div className={styles['instruction-text']}> Interested in working with a team? Let us know who you prefer to wrok with via their GitHub username. We don't have team size limits however we may not be able to accommodate your whole team. </div>
		<Input id='Team member' options={[]}/>
	</div>
)

export default Team
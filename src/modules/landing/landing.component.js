import React from 'react'

import styles from './landing.styl'

const Landing = () => (
	<div className={styles.landing}> 
		<div className={styles.logo}> [logo placeholder] </div>
		<div className={styles.cave}> 
			<span className={styles.caveText}> [cave placeholder] </span>
		</div>
		<div className={styles.formWrapper}> 
			<div className={styles.title}> Dig Deeper </div>
			<div className={styles.date}> Feb. 17 - 20, 2017 </div>
			<div className={styles.formText}> Be the first to know when the adventure begins. </div>
			<input id={styles.registrationInput} placeholder="future-adventurer@underground.com"/>
		</div>
	</div>
)

export default Landing

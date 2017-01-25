import React from 'react'

import styles from './success.scss'

const Success = () => (
	<div>
	<img className={styles.confirmation} width="500px" draggable="false" src="../../../src/assets/img/confirmation.svg" />
	<div className={styles.thanks}>Thanks for registering! </div>
	<div className={styles['instruction-text']}> Keep an eye out for an email regarding more information as we get closer to the event. </div>
	</div>
)

export default Success
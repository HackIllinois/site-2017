import React from 'react'

import styles from './button.scss'

const Button = (props) => (
	<a onClick={props.onClick} className={styles['button']} href={props.dest}> 
	{props.arrow == 'left' ? <span className={styles['arrow-left']}></span> : null} 
	{props.label}
	{props.arrow == 'right' ? <span className={styles['arrow-right']}></span> : null}
	</a> 
)

export default Button